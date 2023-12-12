<template>
  <div />
</template>

<script setup lang="ts">
import { useLoadingBar  } from "naive-ui"

const { error, finish, start } = useLoadingBar();

window.addEventListener("naiveui:loadingBar:start", start);
window.addEventListener("naiveui:loadingBar:finish", finish);
window.addEventListener("naiveui:loadingBar:error", error);
</script>