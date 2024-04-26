<template>
  <h1>ID {{ id }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from '#imports'

const { id } = useRoute().params as Record<string, string>
</script>
