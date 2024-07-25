<template>
  <div>
    <slot />
    <naive-tabbar
      data-testid="tabbar"
      :routes="routes"
    />
  </div>
</template>

<script setup lang="ts">
import type { TabbarRoute } from '#build/types/naiveui'

const routes: TabbarRoute [] = [
  {
    label: 'Page 1',
    to: '/navigation?layout=tabbar',
    iconSelected: 'ph:acorn-fill',
    iconUnselected: 'ph:acorn',
  },
  {
    label: 'Page 2',
    to: '/navigation/other?layout=tabbar',
    iconSelected: 'ph:airplane-fill',
    iconUnselected: 'ph:airplane',
  },
]
</script>
