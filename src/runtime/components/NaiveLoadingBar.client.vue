<template>
  <div />
</template>

<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { useNuxtApp, callOnce } from '#imports'

const props = defineProps<{ navigation?: boolean }>()

await callOnce(() => {
  const { error, finish, start } = useLoadingBar()

  window.addEventListener('naiveui:loadingBar:start', start)
  window.addEventListener('naiveui:loadingBar:finish', finish)
  window.addEventListener('naiveui:loadingBar:error', error)

  if (props.navigation) {
    useNuxtApp().hook('page:loading:start', start)
    useNuxtApp().hook('page:loading:end', finish)
  }
})
</script>
