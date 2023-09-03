<template>
  <div>
    <n-h1>Books</n-h1>
  </div>
</template>

<script setup>
import { definePageMeta, useAsyncData } from '#imports';

definePageMeta({
    colorMode: "light"
})

await useAsyncData(() => new Promise(resolve => {
    setTimeout(resolve, 2000)
}))
</script>