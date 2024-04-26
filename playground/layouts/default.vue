<template>
  <NaiveLayoutSidebar
    :routes="navbarRoutes"
    :drawer-routes="drawerRoutes"
  >
    <template #start>
      <nuxt-link to="/">
        <NaiveIcon name="logos:naiveui" />
      </nuxt-link>
    </template>

    <template #end>
      <NuxtLink
        to="https://github.com/becem-gharbi/nuxt-naiveui"
        target="_"
        aria-label="source-code"
      >
        <n-button
          text
          tag="span"
        >
          <NaiveIcon name="cib:github" />
        </n-button>
      </NuxtLink>
      <NaiveColorModeSwitch />
    </template>

    <template #drawer-header>
      <n-text>Header</n-text>
    </template>

    <template #drawer-footer>
      <n-text>Footer</n-text>
    </template>

    <slot />
  </NaiveLayoutSidebar>
</template>

<script setup lang="ts">
import type { MenuLinkRoute } from '#build/types/naiveui.d.ts'
const navbarRoutes: MenuLinkRoute[] = [
  {
    label: 'Sample, this is a long long label',
    icon: 'ri:home-4-line',
    to: '/'
  },
  {
    label: 'Computers',
    icon: 'material-symbols:computer-outline',
    to: '/computers'
  },
  {
    label: 'Categories',
    icon: 'mdi:bookmark-multiple-outline',
    children: [
      {
        label: 'Books',
        icon: 'material-symbols:menu-book-outline-rounded',
        to: '/books'
      }
    ]
  }
]

const drawerRoutes: MenuLinkRoute[] = [
  {
    label: 'Sample, this is a long long label',
    icon: 'ri:home-4-line',
    to: '/'
  }
]
</script>
