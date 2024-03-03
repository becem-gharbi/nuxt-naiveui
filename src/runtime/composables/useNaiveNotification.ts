import type { NotificationOptions } from 'naive-ui'

export function useNaiveNotification () {
  function create (opts: NotificationOptions) {
    if (process.client) {
      window.dispatchEvent(
        new CustomEvent('naiveui:notification:create', { detail: opts })
      )
    }
  }

  return { create }
}
