<template>
  <div />
</template>

<script setup lang="ts">
import { useNuxtApp, callOnce } from "#imports"
import { useLoadingBar  } from "naive-ui"

const props = defineProps<{ navigation?: boolean }>()

await callOnce('naive-loading-bar-add-listener', () => {
  const { error, finish, start } = useLoadingBar();

  window.addEventListener("naiveui:loadingBar:start", start);
  window.addEventListener("naiveui:loadingBar:finish", finish);
  window.addEventListener("naiveui:loadingBar:error", error);

  if (props.navigation) {
    useNuxtApp().hook('page:loading:start', start)
    useNuxtApp().hook('page:loading:end', finish)
  }

  return true
})
</script>