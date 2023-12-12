<template>
  <div />
</template>

<script setup lang="ts">
import { useNotification } from "naive-ui";
import type { NotificationOptions } from "naive-ui";

interface CustomEvent extends Event {
  detail: NotificationOptions;
}

const { create } = useNotification();

window.addEventListener("naiveui:notification:create", (event) => {
  const { detail } = event as CustomEvent;
  create(detail);
});
</script>
