<template>
  <naive-layout-navbar
    :routes="routes"
    data-testid="layout-navbar"
  >
    <slot />
  </naive-layout-navbar>
</template>

<script setup lang="ts">
import type { MenuLinkRoute } from '#build/types/naiveui'

const routes: MenuLinkRoute[] = [
  {
    label: 'Page 1',
    to: '/navigation?layout=layout-navbar',
  },
  {
    label: 'Page 2',
    to: '/navigation/other?layout=layout-navbar',
  },
]
</script>
