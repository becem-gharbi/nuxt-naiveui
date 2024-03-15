<template>
  <n-layout style="min-height:100vh;min-height:100dvh;">
    <n-layout-header
      bordered
      style="display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px;padding:0 16px;"
    >
      <slot name="start" />
      <div style="flex: 1">
        <LazyNaiveMenuLink
          v-if="!isMobileOrTablet"
          class="notMobileOrTablet"
          :routes="routes"
          mode="horizontal"
        />
      </div>
      <slot name="end" />
      <n-button
        class="mobileOrTablet"
        text
        aria-label="drawer-toggle-btn"
        :focusable="false"
        @click="drawerActive = true"
      >
        <NaiveIcon
          :name="toggleIcon"
          :size="26"
        />
      </n-button>
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

    <LazyNaiveDrawerLink
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
    </LazyNaiveDrawerLink>
  </n-layout>
</template>

<script setup lang="ts">
import type { MenuLinkRoute } from '../types'
import { ref, useNaiveDevice } from '#imports'

withDefaults(
  defineProps<{
    toggleIcon?: string;
    routes?: MenuLinkRoute[];
    drawerRoutes?: MenuLinkRoute[];
    drawerClosable?: boolean;
    drawerWidth?: string | number;
    nativeScrollbar?: boolean;
    drawerPlacement?: 'top' | 'right' | 'bottom' | 'left';
  }>(),
  {
    toggleIcon: 'ph:equals',
    routes: () => [],
    drawerRoutes: () => [],
    drawerClosable: true,
    drawerWidth: '100%',
    nativeScrollbar: false,
    drawerPlacement: 'left'
  }
)

const { isMobileOrTablet } = useNaiveDevice()
const drawerActive = ref(false)
</script>
