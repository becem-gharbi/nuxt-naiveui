export function useNaiveLoadingBar() {
  function start() {
    if (process.client) {
      window.dispatchEvent(new CustomEvent("naiveui:loadingBar:start"));
    }
  }

  function finish() {
    if (process.client) {
      window.dispatchEvent(new CustomEvent("naiveui:loadingBar:finish"));
    }
  }

  function error() {
    if (process.client) {
      window.dispatchEvent(new CustomEvent("naiveui:loadingBar:error"));
    }
  }

  return { start, finish, error };
}
