# Nuxt Naive ui

A Nuxt 3 module for Naive-ui component library

## Features

- ✔️ SSR friendly
- ✔️ Auto imported and tree-shakable components & composables
- ✔️ Highly customizable for color mode and device type
- ✔️ Implements custom components
  - ✔️ `NaiveNavbar` an adaptive navbar for app navigation
  - ✔️ `NaiveIcon` a wrapper based on iconify/vue with large collection of [icons](https://icones.js.org/)
  - ✔️ `NaiveColorModeSwitch` light/dark modes switch based on `useNaiveColorMode` composable

## Installation

```bash
npm i @bg-dev/nuxt-naiveui
```

## Setup

```ts
defineNuxtConfig({
  modules: ["@bg-dev/nuxt-naiveui"],

  naiveui: {
    defaultColorMode: "system",
    defaultIconSize: 18,
    defaultThemeConfig: {},
  },
});
```

## Usage

**For theme customization**, use `NaiveConfig` component in `app.vue` and set `themeConfig` property, alternatively set `defaultThemeConfig` in the module options. The compiled themeConfig is shared globally via `useNaiveTheme` composable.

```javascript
<template>
  <NaiveConfig :theme-config="themeConfig">
    <NuxtPage></NuxtPage>
  </NaiveConfig>
</template>


<script setup lang="ts">
import { ThemeConfig} from "@bg-dev/nuxt-naiveui"

const themeConfig: ThemeConfig = {
  shared: {}, // Common theme options (highest priority)
  mobileOrTablet: {}, // Theme options applied on mobile and tablet (second highest priority)
  mobile: {}, // Theme options applied on mobile only (second highest priority)
  light: {}, // Theme options applied on light mode (lowest priority)
  dark: {}, // Theme options applied on dark mode (lowest priority)
}
</script>
```

**For documentation**, refer to [Naive-ui website](https://www.naiveui.com/en-US/os-theme/docs/introduction)
