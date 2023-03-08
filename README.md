# Nuxt Naive UI

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt 3 module for integrating the Naive UI component library into your Nuxt 3 project

## Features

- ✔️ SSR friendly
- ✔️ Auto imported and tree-shakable components & composables
- ✔️ Highly customizable for color mode and device type
- ✔️ Implements custom components
  - ✔️ `NaiveNavbar` an adaptive navbar for app navigation
  - ✔️ `NaiveIcon` a wrapper based on iconify/vue with large collection of [icons](https://icones.js.org/)
  - ✔️ `NaiveColorModeSwitch` light/dark modes switch based on `useNaiveColorMode` composable
  - ✔️ `NaiveTabbar` a tabBar for mobile/tablet navigation

## Installation

Add `@bg-dev/nuxt-naiveui` dependency to your project

```bash
# Using npm
npm install --save-dev @bg-dev/nuxt-naiveui

# Using yarn
yarn add --dev @bg-dev/nuxt-naiveui
```

## Setup
Add `@bg-dev/nuxt-naiveui` to the `modules` section of `nuxt.config.ts` and define the default settings.
```js
export default defineNuxtConfig({
  modules: ["@bg-dev/nuxt-naiveui"],

  naiveui: {
    defaultColorMode: "system",
    defaultIconSize: 18,
    defaultThemeConfig: {},
  },
});
```
That's it! You can now use `@bg-dev/nuxt-naiveui` in your Nuxt app ✨

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


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@bg-dev/nuxt-naiveui/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@bg-dev/nuxt-naiveui
[npm-downloads-src]: https://img.shields.io/npm/dm/@bg-dev/nuxt-naiveui.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@bg-dev/nuxt-naiveui
[license-src]: https://img.shields.io/npm/l/@bg-dev/nuxt-naiveui.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@bg-dev/nuxt-naiveui
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
