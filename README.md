# Nuxt Naive ui

A Nuxt 3 module for Naive-ui component library

## Features

✔️ SSR friendly<br>
✔️ Auto imported and tree-shakable components & composables<br>
✔️ Highly customizable for color mode and device type<br>
✔️ Large collection of 100k icons from Iconify<br>
✔️ Implements custom components :

- `NaiveNavbar` : an adaptive navbar component for app navigation

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
    defaultIconSize: 20,
    defaultThemeConfig: {},
  },

  devServer: {
    host: "127.0.0.1", // Fix ofetch body unusable error on Nuxt v-3.2.2,
  },
});
```

## Usage

**For theme customization**, use `NaiveConfig` component in `app.vue` and set `themeConfig` property or set `defaultThemeConfig` in the module options.

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
  mobileOrTablet: {} // Theme options applied on mobile/tablet (second highest priority)
  light: {}, // Theme options applied on light mode (lowest priority)
  dark: {}, // Theme options applied on dark mode (lowest priority)
}
</script>
```

**For color mode control**, use `useNaiveColorMode` composable or `NaiveColorModeSwitch` component.

**For icons usage**, use `NaiveIcon` component and set `name` property from Iconify [dataset](https://icones.js.org/).

**For documentation**, refer to [Naive-ui website](https://www.naiveui.com/en-US/os-theme/docs/introduction)
