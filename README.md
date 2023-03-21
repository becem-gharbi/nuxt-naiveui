# Nuxt Naive UI

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt 3 module for integrating Naive UI component library into your Nuxt 3 project

## Features

- ✔️ SSR friendly
- ✔️ Auto imported and tree-shakable components & composables
- ✔️ Highly customizable for color mode and device type
- ✔️ Friendly integration with Tailwindcss
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
    colorModePreference: "light",
    iconSize: 18,
    themeConfig: {},
  },
});
```

That's it! You can now use `@bg-dev/nuxt-naiveui` in your Nuxt app ✨

## Usage

### Theme customization

Use `NaiveConfig` component in `app.vue` and set `themeConfig` property, alternatively set `themeConfig` in the module options. The compiled themeConfig is shared globally via `useNaiveTheme` composable.

```javascript
<template>
  <NaiveConfig :theme-config="themeConfig">
    <NuxtPage></NuxtPage>
  </NaiveConfig>
</template>


<script setup lang="ts">
import { ThemeConfig} from "@bg-dev/nuxt-naiveui"

const themeConfig: ThemeConfig = {
  shared: {}, // Common theme options
  mobileOrTablet: {}, // Theme options applied on mobile and tablet
  mobile: {}, // Theme options applied on mobile only
  light: {}, // Theme options applied on light mode
  dark: {}, // Theme options applied on dark mode
}
</script>
```

### Integration with Nuxt Tailwind
Color mode integration
```js
// tailwind.config.js

module.exports = {
  darkMode: "class",
}
```

Theme integration
```ts
// nuxt.config.ts

tailwindcss: {
  exposeConfig: true
}
```
```ts
// app.vue

import { ThemeConfig } from "@bg-dev/nuxt-naiveui"
import { theme } from '#tailwind-config'

const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: theme.fontFamily.sans,
      lineHeight: theme.lineHeight.normal
    },
  },
  light: {
    common: {
      primaryColor: theme.colors.blue[600],
      primaryColorHover: theme.colors.blue[500],
      primaryColorPressed: theme.colors.blue[700]
    }
  },
  dark: {
    common: {
      primaryColor: theme.colors.blue[500],
      primaryColorHover: theme.colors.blue[400],
      primaryColorPressed: theme.colors.blue[600]
    }
  }
}
```
## Notes

- It's **highly recommended** to include `NaiveConfig` even without theme configuration as it's intended to fixe global styles and accessibility issues.
- **Body is unusable** is an error message i've encountered frequently. A quick solution is to downgrade Node to v16 as suggested in this [issue](https://github.com/nuxt/nuxt/issues/19245).

### Documentation

Refer to [Naive-ui website](https://www.naiveui.com/en-US/os-theme/docs/introduction)

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

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
