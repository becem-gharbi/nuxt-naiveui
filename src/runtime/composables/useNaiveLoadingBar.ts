export function useNaiveLoadingBar() {
  function start() {
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('naiveui:loadingBar:start'))
    }
  }

  function finish() {
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('naiveui:loadingBar:finish'))
    }
  }

  function error() {
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('naiveui:loadingBar:error'))
    }
  }

  return { start, finish, error }
}
