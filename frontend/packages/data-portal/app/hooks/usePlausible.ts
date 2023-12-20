import axios from 'axios'
import { useCallback } from 'react'

import { useEnvironment } from 'app/context/Environment.context'
import { DrawerId } from 'app/state/drawer'
import { DownloadConfig, DownloadStep, DownloadTab } from 'app/types/download'

const PLAUSIBLE_EXTENSIONS = [
  'outbound-links',
  'file-downloads',
  ...(process.env.LOCALHOST_PLAUSIBLE_TRACKING === 'true' ? ['local'] : []),
].join('.')

export const PLAUSIBLE_URL = `https://plausible.io/js/script.${PLAUSIBLE_EXTENSIONS}.js`

export const PLAUSIBLE_ENV_URL_MAP: Record<NodeJS.ProcessEnv['ENV'], string> = {
  local: 'frontend.cryoet.dev.si.czi.technology',
  dev: 'frontend.cryoet.dev.si.czi.technology',
  staging: 'frontend.cryoet.staging.si.czi.technology',
  prod: 'cryoetdataportal.czscience.com',
}

export enum Events {
  ClickBackToConfigureDownload = 'Click back to configure download',
  ClickDownloadTab = 'Click download tab',
  ClickDownloadTomogram = 'Click download tomogram',
  ClickNextToDownloadOptions = 'Click next to configure download',
  CloseDownloadModal = 'Close download modal',
  CopyDownloadInfo = 'Copy download info',
  Filter = 'Filter',
  OpenDownloadModal = 'Open download modal',
  ToggleMetadataDrawer = 'Toggle metadata drawer',
}

export type PlausibleDownloadModalPayload<T = object> = T & {
  config?: DownloadConfig
  datasetId?: number
  fileSize?: number
  runId?: number
  step?: DownloadStep
  tab?: DownloadTab
  tomogramProcessing?: string
  tomogramSampling?: string
}

export type DownloadModalPropKeys = keyof PlausibleDownloadModalPayload

export type EventPayloads = {
  [Events.ClickBackToConfigureDownload]: PlausibleDownloadModalPayload
  [Events.ClickDownloadTab]: PlausibleDownloadModalPayload
  [Events.ClickDownloadTomogram]: PlausibleDownloadModalPayload<{
    downloadUrl: string
  }>
  [Events.ClickNextToDownloadOptions]: PlausibleDownloadModalPayload
  [Events.CloseDownloadModal]: PlausibleDownloadModalPayload
  [Events.CopyDownloadInfo]: PlausibleDownloadModalPayload<{
    type: string
    content: string
  }>
  [Events.OpenDownloadModal]: PlausibleDownloadModalPayload

  [Events.Filter]: {
    field: string
    value?: string | null
    // Add type field for future filters
    type: 'dataset'
  }

  [Events.ToggleMetadataDrawer]: {
    open: boolean
    type: DrawerId
  }
}

export function usePlausible() {
  const { ENV, LOCALHOST_PLAUSIBLE_TRACKING } = useEnvironment()

  const logPlausibleEvent = useCallback(
    <E extends keyof EventPayloads>(
      event: E,
      ...payloads: EventPayloads[E][]
    ) => {
      const payload = {
        name: event,
        domain: PLAUSIBLE_ENV_URL_MAP[ENV],
        url: window.location.href,
        props: payloads[0],
      }

      if (ENV === 'local') {
        // eslint-disable-next-line no-console
        console.info({
          message: 'Plausible event',
          event,
          payload,
        })

        if (LOCALHOST_PLAUSIBLE_TRACKING !== 'true') {
          return
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      axios.post('/api/event', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    },
    [ENV, LOCALHOST_PLAUSIBLE_TRACKING],
  )

  return logPlausibleEvent
}
