<template>
  <NaiveConfig :theme-config="themeConfig">
    <client-only>
      <n-loading-bar-provider>
        <naive-loading-bar navigation />
      </n-loading-bar-provider>
    </client-only>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NaiveConfig>
</template>

<script setup lang="ts">
import type { ThemeConfig } from "../src/module";

const themeConfig: ThemeConfig = {
  // shared: {
  //   common: {
  //     fontFamily: theme.fontFamily.sans.join(", "),
  //     lineHeight: theme.lineHeight.normal,
  //   },
  // },
  // light: {
  //   common: {
  //     primaryColor: theme.colors.blue[600],
  //     primaryColorHover: theme.colors.blue[500],
  //     primaryColorPressed: theme.colors.blue[700],
  //   },
  // },
  // dark: {
  //   common: {
  //     primaryColor: theme.colors.blue[500],
  //     primaryColorHover: theme.colors.blue[400],
  //     primaryColorPressed: theme.colors.blue[600],
  //   },
  // },
};
</script>

<style>
.brand {
  display: flex;
  align-items: center;
  gap: 1em;
}

.page-enter-active,
.page-leave-active {
  transition: all 1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


.layout-enter-active,
.layout-leave-active {
  transition: all 1s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
