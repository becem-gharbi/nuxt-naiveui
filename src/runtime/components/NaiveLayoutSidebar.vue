<template>
  <n-layout class="naive-page">
    <n-layout-header
      bordered
      style="display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px;padding:0 16px;"
      class="layout-header"
    >
      <naive-drawer-toggle
        v-if="togglePlacement === 'left'"
        :icon="toggleIcon"
        @click="drawerActive = true"
      />
      <slot name="start" />
      <div style="flex: 1" />
      <slot name="end" />
      <naive-drawer-toggle
        v-if="togglePlacement === 'right'"
        :icon="toggleIcon"
        @click="drawerActive = true"
      />
    </n-layout-header>

    <n-layout
      position="absolute"
      :has-sider="!isMobileOrTablet"
      style="top:56px;"
      class="layout-content"
    >
      <n-layout-sider
        v-if="!isMobileOrTablet"
        class="notMobileOrTablet"
        content-style="min-height:100%;display:flex;flex-direction:column;justify-content:space-between;gap:16px;padding:8px;"
        :native-scrollbar="false"
        bordered
        v-bind="sider"
      >
        <slot name="start" />
        <div style="flex: 1">
          <lazy-naive-menu-link
            :routes="routes"
            mode="vertical"
          />
        </div>
        <slot name="end" />
      </n-layout-sider>

      <n-layout
        content-style="padding: 16px;"
        :native-scrollbar="nativeScrollbar"
      >
        <slot />
      </n-layout>
    </n-layout>

    <lazy-naive-drawer-link
      v-model:show="drawerActive"
      :routes="drawerRoutes"
      :placement="drawerPlacement"
      :closable="drawerClosable"
      :width="drawerWidth"
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
import type { LayoutSiderProps } from 'naive-ui'
import NaiveDrawerToggle from './internals/NaiveDrawerToggle.vue'
import type { MenuLinkRoute } from '#build/types/naiveui'
import { ref, useNaiveDevice } from '#imports'

withDefaults(
  defineProps<{
    toggleIcon?: string
    togglePlacement?: 'left' | 'right'
    routes?: MenuLinkRoute[]
    drawerRoutes?: MenuLinkRoute[]
    drawerPlacement?: 'top' | 'right' | 'bottom' | 'left'
    drawerClosable?: boolean
    drawerWidth?: string | number
    nativeScrollbar?: boolean
    sider?: LayoutSiderProps
  }>(),
  {
    toggleIcon: 'ph:equals',
    togglePlacement: 'right',
    routes: () => [],
    drawerRoutes: () => [],
    drawerClosable: true,
    drawerPlacement: 'left',
    drawerWidth: '100%',
    nativeScrollbar: false,
  },
)

const { isMobileOrTablet } = useNaiveDevice()
const drawerActive = ref(false)
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .layout-header {
    display: none !important;
  }
  .layout-content {
    top: 0px !important;
  }
}
</style>
