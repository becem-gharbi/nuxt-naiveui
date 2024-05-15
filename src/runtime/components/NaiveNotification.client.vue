<template>
  <div />
</template>

<script setup lang="ts">
import { useNotification } from 'naive-ui'
import type { NotificationOptions } from 'naive-ui'
import { callOnce } from '#imports'

interface CustomEvent extends Event {
  detail: NotificationOptions
}

await callOnce(() => {
  const { create } = useNotification()

  window.addEventListener('naiveui:notification:create', (event) => {
    const { detail } = event as CustomEvent
    create(detail)
  })
})
</script>
