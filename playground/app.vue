<template>
  <NaiveConfig :themeConfig="themeConfig">
    <Icon name="uil:github" size="30"></Icon>
    <NaiveNavbar :menuOptions="menuOptions"></NaiveNavbar>
    <div class="container">
      <n-text>{{ colorMode }}</n-text>
      <n-text>heelllow</n-text>
      <n-text>heelllow again</n-text>
      <n-button @click="toggleColorMode">Toggle color mode</n-button>
    </div>
  </NaiveConfig>
</template>


<script setup lang="ts">
import { useNaiveColorMode, h } from "#imports"
import { MenuOption } from "naive-ui"

const menuOptions: MenuOption[] = [
  // {
  //   label: "Pre-trained",
  //   icon: () => h(Icon, { name: "ic:baseline-check" }),
  //   children: [
  //     {
  //       label: () => h(NuxtLink, { to: "/object-detection" }, { default: () => "Object detection" }),
  //       key: "/object-detection",
  //       icon: () => h(Icon, { name: "material-symbols:detection-and-zone" }),
  //     }
  //   ]
  // },
  // {
  //   label: "Re-trained",
  //   icon: () => h(Icon, { name: "material-symbols:autorenew" }),
  // }
]

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