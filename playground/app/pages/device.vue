<template>
  <n-h1> device </n-h1>

  <p data-testid="device-mobile">
    {{ device.isMobile }}
  </p>

  <p data-testid="device-mobileOrTablet">
    {{ device.isMobileOrTablet }}
  </p>
</template>

<script setup>
import { useNaiveDevice } from '#imports'

const device = useNaiveDevice()
</script>
