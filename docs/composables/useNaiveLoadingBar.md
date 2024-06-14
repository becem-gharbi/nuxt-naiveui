# useNaiveLoadingBar

This composable is intended to support `useLoadingBar` usage on Nuxt plugins.

Make sure to add `naive-loading-bar` as a child of `n-loading-bar-provider`.

```vue
<template>
  <n-loading-bar-provider>
    <naive-loading-bar navigation />
  </n-loading-bar-provider>
</template>
```

The `navigation` prop can be set to `true` in order to show the loading bar on client-side navigation. This feature is an alternative to [`nuxt-loading-indicator`](https://nuxt.com/docs/api/components/nuxt-loading-indicator).
