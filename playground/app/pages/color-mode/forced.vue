<template>
  <nuxt-layout name="color-mode">
    <n-h1>color mode forced</n-h1>
  </nuxt-layout>
</template>

<script setup>
import { definePageMeta } from '#imports'

definePageMeta({ colorMode: 'dark' })
</script>
