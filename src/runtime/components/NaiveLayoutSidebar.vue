<template>
  <n-layout style="min-height:100vh;min-height:100dvh;">
    <n-layout-header
      bordered
      style="display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px;padding:0 16px;"
      class="layout-header"
    >
      <n-button
        v-if="togglePlacement === 'left'"
        class="mobileOrTablet"
        text
        aria-label="drawer-toggle-btn"
        :focusable="false"
        @click="drawerActive = true"
      >
        <naive-icon
          :name="toggleIcon"
          :size="26"
        />
      </n-button>
      <slot name="start" />
      <div style="flex: 1" />
      <slot name="end" />
      <n-button
        v-if="togglePlacement === 'right'"
        class="mobileOrTablet"
        text
        aria-label="drawer-toggle-btn"
        :focusable="false"
        @click="drawerActive = true"
      >
        <naive-icon
          :name="toggleIcon"
          :size="26"
        />
      </n-button>
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
import type { MenuLinkRoute } from '../types'
import { ref, useNaiveDevice } from '#imports'

withDefaults(
  defineProps<{
    toggleIcon?: string;
    togglePlacement?: 'left' | 'right';
    routes?: MenuLinkRoute[];
    drawerRoutes?: MenuLinkRoute[];
    drawerPlacement?: 'top' | 'right' | 'bottom' | 'left';
    drawerClosable?: boolean;
    drawerWidth?: string | number;
    nativeScrollbar?: boolean;
  }>(),
  {
    toggleIcon: 'ph:equals',
    togglePlacement: 'right',
    routes: () => [],
    drawerRoutes: () => [],
    drawerClosable: true,
    drawerPlacement: 'left',
    drawerWidth: '100%',
    nativeScrollbar: false
  }
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
