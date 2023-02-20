<template>
  <div class="container">
    <n-text>{{ colorMode }}</n-text>
    <n-text>{{ isMobileOrTablet }}</n-text>
    <n-button @click="toggleColorMode">Toggle color mode</n-button>
  </div>
</template>


<script setup lang="ts">
import { useNaiveTheme } from "#imports"

const { colorMode, isMobileOrTablet } = useNaiveTheme()

function toggleColorMode() {
  colorMode.value = colorMode.value === "light" ? "dark" : "light"
}
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>