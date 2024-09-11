/* eslint-disable @typescript-eslint/no-throw-literal */

import { ShouldRevalidateFunctionArgs } from '@remix-run/react'
import { json, LoaderFunctionArgs } from '@remix-run/server-runtime'
import { toNumber } from 'lodash-es'
import { useMemo } from 'react'
import { match } from 'ts-pattern'

import { apolloClient } from 'app/apollo.server'
import { AnnotationFilter } from 'app/components/AnnotationFilter/AnnotationFilter'
import { DepositionFilterBanner } from 'app/components/DepositionFilterBanner'
import { DownloadModal } from 'app/components/Download'
import { RunHeader } from 'app/components/Run'
import { AnnotationDrawer } from 'app/components/Run/AnnotationDrawer'
import { AnnotationTable } from 'app/components/Run/AnnotationTable'
import { RunMetadataDrawer } from 'app/components/Run/RunMetadataDrawer'
import { TomogramMetadataDrawer } from 'app/components/Run/TomogramMetadataDrawer'
import { TomogramsTable } from 'app/components/Run/TomogramTable'
import { TablePageLayout } from 'app/components/TablePageLayout'
import { QueryParams } from 'app/constants/query'
import { getRunById } from 'app/graphql/getRunById.server'
import { useDownloadModalQueryParamState } from 'app/hooks/useDownloadModalQueryParamState'
import { useFileSize } from 'app/hooks/useFileSize'
import { useI18n } from 'app/hooks/useI18n'
import { useQueryParam } from 'app/hooks/useQueryParam'
import { useRunById } from 'app/hooks/useRunById'
import { BaseAnnotation } from 'app/state/annotation'
import { DownloadConfig } from 'app/types/download'
import { useFeatureFlag } from 'app/utils/featureFlags'
import { shouldRevalidatePage } from 'app/utils/revalidate'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const id = params.id ? +params.id : NaN

  if (Number.isNaN(+id)) {
    throw new Response(null, {
      status: 400,
      statusText: 'ID is not defined',
    })
  }

  const url = new URL(request.url)
  const annotationsPage = +(
    url.searchParams.get(QueryParams.AnnotationsPage) ?? '1'
  )
  const depositionId = +(url.searchParams.get(QueryParams.DepositionId) ?? '-1')

  const { data } = await getRunById({
    id,
    annotationsPage,
    depositionId,
    client: apolloClient,
    params: url.searchParams,
  })

  if (data.runs.length === 0) {
    throw new Response(null, {
      status: 404,
      statusText: `Run with ID ${id} not found`,
    })
  }

  return json(data)
}

export function shouldRevalidate(args: ShouldRevalidateFunctionArgs) {
  return shouldRevalidatePage({
    ...args,
    paramsToRefetch: [
      QueryParams.AuthorName,
      QueryParams.AuthorOrcid,
      QueryParams.ObjectName,
      QueryParams.ObjectId,
      QueryParams.ObjectShapeType,
      QueryParams.MethodType,
      QueryParams.AnnotationSoftware,
      QueryParams.AnnotationsPage,
    ],
  })
}

export default function RunByIdPage() {
  const multipleTomogramsEnabled = useFeatureFlag('multipleTomograms')
  const {
    run,
    processingMethods,
    annotationFiles,
    tomogramsForDownload,
    annotationFilesAggregates,
    tomogramsCount,
    deposition,
  } = useRunById()

  const {
    downloadConfig,
    tomogramProcessing,
    tomogramSampling,
    annotationId,
    tomogramId,
    fileFormat,
    objectShapeType,
  } = useDownloadModalQueryParamState()

  const activeTomogram =
    downloadConfig === DownloadConfig.Tomogram
      ? tomogramsForDownload.find((tomogram) =>
          multipleTomogramsEnabled
            ? tomogram.id === Number(tomogramId)
            : `${tomogram.voxel_spacing}` === tomogramSampling &&
              tomogram.processing === tomogramProcessing,
        )
      : undefined

  const tomogram = run.tomogram_voxel_spacings.at(0)
  const { t } = useI18n()

  const activeAnnotation: BaseAnnotation | undefined = useMemo(
    () =>
      annotationFiles.find(
        (file) => file.annotation.id === toNumber(annotationId),
      )?.annotation,
    [annotationId, annotationFiles],
  )

  const httpsPath = useMemo(() => {
    if (activeAnnotation) {
      return activeAnnotation.files?.find(
        (file) =>
          file.format === fileFormat && file.shape_type === objectShapeType,
      )?.https_path
    }

    return activeTomogram?.https_mrc_scale0 ?? undefined
  }, [
    activeAnnotation,
    activeTomogram?.https_mrc_scale0,
    fileFormat,
    objectShapeType,
  ])

  const { data: fileSize } = useFileSize(httpsPath, {
    enabled: fileFormat !== 'zarr',
  })

  const [depositionId] = useQueryParam<string>(QueryParams.DepositionId)

  return (
    <TablePageLayout
      header={<RunHeader />}
      tabsTitle={multipleTomogramsEnabled ? t('browseRunData') : undefined}
      banner={
        depositionId &&
        deposition && (
          <DepositionFilterBanner
            deposition={deposition}
            labelI18n="onlyDisplayingAnnotations"
          />
        )
      }
      tabs={[
        {
          title: t('annotations'),
          filterPanel: <AnnotationFilter />,
          table: <AnnotationTable />,
          pageQueryParamKey: QueryParams.AnnotationsPage,
          filteredCount: annotationFilesAggregates.filteredCount,
          totalCount: annotationFilesAggregates.totalCount,
          countLabel: t('annotations'),
        },
        ...(multipleTomogramsEnabled
          ? [
              {
                title: t('tomograms'),
                table: <TomogramsTable />,
                pageQueryParamKey: QueryParams.TomogramsPage,
                filteredCount: tomogramsCount,
                totalCount: tomogramsCount,
                countLabel: t('tomograms'),
              },
            ]
          : []),
      ]}
      downloadModal={
        <DownloadModal
          activeAnnotation={activeAnnotation}
          activeTomogram={activeTomogram}
          allTomogramProcessing={processingMethods}
          allTomograms={tomogramsForDownload}
          datasetId={run.dataset.id}
          datasetTitle={run.dataset.title}
          fileSize={fileSize}
          httpsPath={httpsPath}
          objectName={activeAnnotation?.object_name}
          runId={run.id}
          runName={run.name}
          s3Path={match({
            annotationId,
            downloadConfig,
            fileFormat,
          })
            .with(
              { downloadConfig: DownloadConfig.Tomogram, fileFormat: 'mrc' },
              () => activeTomogram?.s3_mrc_scale0,
            )
            .with(
              { downloadConfig: DownloadConfig.Tomogram, fileFormat: 'zarr' },
              () => activeTomogram?.s3_omezarr_dir,
            )
            .with({ downloadConfig: DownloadConfig.AllAnnotations }, () =>
              tomogram?.s3_prefix
                ? `${tomogram.s3_prefix}Annotations`
                : undefined,
            )
            .with(
              { annotationId },
              () =>
                activeAnnotation?.files.find(
                  (file) =>
                    file.format === fileFormat &&
                    file.shape_type === objectShapeType,
                )?.s3_path,
            )
            .otherwise(() => undefined)}
          tomogramId={activeTomogram?.id ?? undefined}
          tomogramVoxelId={tomogram?.id ?? undefined}
          type={annotationId ? 'annotation' : 'runs'}
        />
      }
      drawers={
        <>
          <RunMetadataDrawer />
          <AnnotationDrawer />
          <TomogramMetadataDrawer />
        </>
      }
    />
  )
}
