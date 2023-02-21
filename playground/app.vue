<template>
  <NaiveConfig :themeConfig="themeConfig">
    <div class="container">
      <n-text>{{ colorMode }}</n-text>
      <n-text>heelllow</n-text>
      <n-text>heelllow again</n-text>
      <n-button @click="toggleColorMode">Toggle color mode</n-button>
    </div>
  </NaiveConfig>
</template>


<script setup lang="ts">
import { useNaiveColorMode } from "#imports"

const { colorMode } = useNaiveColorMode()

function toggleColorMode() {
  colorMode.value = colorMode.value === "light" ? "dark" : "light"
}

const themeConfig = {
  dark: {
    common: {
      bodyColor: "red"
    }
  }
}
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>