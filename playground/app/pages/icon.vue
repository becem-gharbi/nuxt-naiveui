<template>
  <div>
    <naive-icon :name />
    <button
      data-testid="icon-name-toggle"
      @click="name = 'ph:hand'"
    >
      Toggle
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from '#imports'

const name = ref('ph:bird')
</script>
