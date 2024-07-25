<template>
  <n-layout class="naive-page">
    <n-layout-header
      bordered
      v-bind="header"
      style="display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px;padding:0 16px;"
    >
      <naive-drawer-toggle
        v-if="togglePlacement === 'left'"
        :icon="toggleIcon"
        @click="drawerActive = true"
      />

      <slot name="start" />
      <div style="flex: 1">
        <lazy-naive-menu-link
          v-if="!isMobileOrTablet"
          class="naive-not-mobile-or-tablet"
          :routes="routes"
          mode="horizontal"
        />
      </div>
      <slot name="end" />
      <naive-drawer-toggle
        v-if="togglePlacement === 'right'"
        :icon="toggleIcon"
        @click="drawerActive = true"
      />
    </n-layout-header>

    <n-layout
      position="absolute"
      :has-sider="false"
      :native-scrollbar="nativeScrollbar"
      style="top:56px;"
    >
      <n-layout
        content-style="padding: 16px;"
        :native-scrollbar="false"
      >
        <slot />
      </n-layout>
    </n-layout>

    <lazy-naive-drawer-link
      v-model:show="drawerActive"
      :routes="drawerRoutes"
      :closable="drawerClosable"
      :width="drawerWidth"
      :placement="drawerPlacement"
    >
      <template #header>
        <slot name="drawer-header" />
      </template>
      <template #footer>
        <slot name="drawer-footer" />
      </template>
    </lazy-naive-drawer-link>
  </n-layout>
</template>

<script setup lang="ts">
import type { LayoutHeaderProps } from 'naive-ui'
import NaiveDrawerToggle from './internals/NaiveDrawerToggle.vue'
import type { MenuLinkRoute } from '#build/types/naiveui'
import { ref, useNaiveDevice } from '#imports'

withDefaults(
  defineProps<{
    toggleIcon?: string
    togglePlacement?: 'left' | 'right'
    routes?: MenuLinkRoute[]
    drawerRoutes?: MenuLinkRoute[]
    drawerClosable?: boolean
    drawerWidth?: string | number
    nativeScrollbar?: boolean
    drawerPlacement?: 'top' | 'right' | 'bottom' | 'left'
    header?: LayoutHeaderProps
  }>(),
  {
    toggleIcon: 'ph:equals',
    togglePlacement: 'right',
    routes: () => [],
    drawerRoutes: () => [],
    drawerClosable: true,
    drawerWidth: '100%',
    nativeScrollbar: false,
    drawerPlacement: 'left',
  },
)

const { isMobileOrTablet } = useNaiveDevice()
const drawerActive = ref(false)
</script>
