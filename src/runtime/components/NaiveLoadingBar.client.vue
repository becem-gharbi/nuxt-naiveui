<template>
  <div />
</template>

<script setup lang="ts">
import { useNuxtApp } from "#imports"
import { useLoadingBar  } from "naive-ui"

const { error, finish, start } = useLoadingBar();

window.addEventListener("naiveui:loadingBar:start", start);
window.addEventListener("naiveui:loadingBar:finish", finish);
window.addEventListener("naiveui:loadingBar:error", error);

const props = defineProps<{ navigation?: boolean }>()

if (props.navigation) {
  useNuxtApp().hook('page:start', start)
  useNuxtApp().hook('page:finish', finish)
}
</script>