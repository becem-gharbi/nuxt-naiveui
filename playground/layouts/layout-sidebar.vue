<template>
  <naive-layout-sidebar
    :routes="routes"
    data-testid="layout-sidebar"
  >
    <slot />
  </naive-layout-sidebar>
</template>

<script setup lang="ts">
import type { MenuLinkRoute } from '#build/types/naiveui'

const routes: MenuLinkRoute[] = [
  {
    label: 'Page 1',
    to: '/navigation?layout=layout-sidebar',
  },
  {
    label: 'Page 2',
    to: '/navigation/other?layout=layout-sidebar',
  },
]
</script>
