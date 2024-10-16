import { ModalSubtitle } from 'app/components/ModalSubtitle'
import { IdPrefix } from 'app/constants/idPrefixes'
import { useDownloadModalContext } from 'app/context/DownloadModal.context'
import { useDownloadModalQueryParamState } from 'app/hooks/useDownloadModalQueryParamState'
import { useI18n } from 'app/hooks/useI18n'

import { ConfigureAnnotationDownloadContent } from './ConfigureAnnotationDownloadContent'
import { ConfigureTomogramDownloadContent } from './ConfigureTomogramDownloadContent'

export function ConfigureDownloadContent() {
  const { t } = useI18n()

  const { annotationName, annotationId, objectShapeType } =
    useDownloadModalQueryParamState()

  const { annotationToDownload, datasetTitle, runName, objectName } =
    useDownloadModalContext()

  return (
    <>
      <ModalSubtitle label={t('datasetName')} value={datasetTitle} />
      {runName && <ModalSubtitle label={t('runName')} value={runName} />}
      {annotationName && (
        <ModalSubtitle label={t('annotationName')} value={annotationName} />
      )}
      {annotationId && (
        <ModalSubtitle
          label={t('annotationId')}
          value={`${IdPrefix.Annotation}-${annotationId}`}
        />
      )}
      {objectName && (
        <ModalSubtitle label={t('objectName')} value={objectName} />
      )}
      {objectShapeType && (
        <ModalSubtitle label={t('objectShapeType')} value={objectShapeType} />
      )}
      {annotationToDownload !== undefined && (
        <ModalSubtitle
          label={t('alignmentId')}
          value={`${IdPrefix.Alignment}-${annotationToDownload.id}`}
        />
      )}

      <p className="mt-sds-xl text-sds-body-m leading-sds-body-m font-semibold">
        {t('selectDownload')}
      </p>

      {annotationId ? (
        <ConfigureAnnotationDownloadContent />
      ) : (
        <ConfigureTomogramDownloadContent />
      )}
    </>
  )
}
