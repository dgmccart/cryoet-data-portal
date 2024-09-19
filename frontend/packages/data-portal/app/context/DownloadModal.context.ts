import { createContext, useContext } from 'react'

import { GetRunByIdQuery } from 'app/__generated__/graphql'
import { BaseAnnotation } from 'app/state/annotation'

export type DownloadModalType = 'dataset' | 'runs' | 'annotation'

export type Tomogram = GetRunByIdQuery['tomograms_for_download'][number]

export interface DownloadModalContextValue {
  annotationToDownload?: BaseAnnotation
  tomogramToDownload?: Tomogram

  allTomogramProcessing?: string[]
  allTomograms?: Tomogram[]
  datasetId?: number
  datasetTitle?: string
  fileSize?: number
  httpsPath?: string
  objectName?: string
  runId?: number
  runName?: string
  s3Path?: string
  tomogramId?: number
  tomogramVoxelId?: number
  type: DownloadModalType
}

export const DownloadModalContext =
  createContext<DownloadModalContextValue | null>(null)

export function useDownloadModalContext() {
  const value = useContext(DownloadModalContext)

  if (!value) {
    throw new Error(
      'useDownloadModal must be used within a DownloadModalContext',
    )
  }

  return value
}
