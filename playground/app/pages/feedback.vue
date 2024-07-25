<template>
  <div>
    <n-notification-provider>
      <naive-notification />
    </n-notification-provider>

    <n-loading-bar-provider>
      <naive-loading-bar navigation />
    </n-loading-bar-provider>

    <n-button @click="showNotification">
      Show notification
    </n-button>

    <n-button @click="useNaiveLoadingBar().start()">
      Start loading bar
    </n-button>

    <n-button @click="useNaiveLoadingBar().finish()">
      Stop loading bar
    </n-button>
  </div>
</template>

<script setup>
import { useNaiveNotification, useNaiveLoadingBar } from '#imports'

function showNotification() {
  useNaiveNotification().create({
    title: 'Notification',
  })
}
</script>
