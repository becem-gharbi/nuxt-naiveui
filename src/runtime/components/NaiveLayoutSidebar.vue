<template>
  <n-layout style="min-height: 100dvh">
    <n-layout-header
      bordered
      class="layout-header"
    >
      <slot name="start" />
      <div style="flex: 1">
        <NaiveMenuLink
          class="notMobileOrTablet"
          :routes="routes"
          mode="horizontal"
        />
      </div>
      <slot name="end" />
      <n-button
        class="mobileOrTablet"
        text
        tag="span"
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
      :has-sider="true"
      class="layout-content"
    >
      <n-layout-sider
        class="notMobileOrTablet"
        content-style="min-height:100dvh;display:flex;flex-direction:column;justify-content:space-between;gap:16px;padding:8px;"
        :native-scrollbar="false"
        bordered
      >
        <slot name="start" />
        <div style="flex: 1">
          <NaiveMenuLink
            :routes="routes"
            mode="vertical"
          />
        </div>
        <slot name="end" />
      </n-layout-sider>

      <n-layout
        content-style="padding: 16px;"
        :native-scrollbar="false"
      >
        <slot />
      </n-layout>
    </n-layout>
  </n-layout>

  <client-only>
    <n-drawer
      v-model:show="drawerActive"
      :width="drawerWidth"
      placement="left"
    >
      <n-drawer-content
        :body-content-style="{ padding: '8px' }"
        :header-style="{ padding: '16px' }"
        :footer-style="{ justifyContent: 'start' }"
        :closable="drawerClosable"
      >
        <template #header>
          <slot name="drawer-header" />
        </template>

        <LazyNaiveMenuLink
          mode="vertical"
          :routes="drawerRoutes"
        />

        <template #footer>
          <slot name="drawer-footer" />
        </template>
      </n-drawer-content>
    </n-drawer>
  </client-only>
</template>

<script setup lang="ts">
import { ref, useRouter } from "#imports";
import type { MenuLinkRoute } from "../types";

withDefaults(
  defineProps<{
    toggleIcon?: string;
    routes?: MenuLinkRoute[];
    drawerRoutes?: MenuLinkRoute[];
    drawerClosable?: boolean;
    drawerWidth?: string | number;
  }>(),
  {
    toggleIcon: "ph:equals",
    routes: () => [],
    drawerRoutes: () => [],
    drawerClosable: true,
    drawerWidth: '100%'
  }
);

const drawerActive = ref(false);
useRouter().afterEach(() => (drawerActive.value = false));
</script>

<style scoped>
.layout-header {
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 56px;
  padding: 0 16px;
}

@media screen and (min-width: 768px) {
  .layout-header {
    display: none !important;
  }
  .layout-content {
    top: 0px;
  }
}

@media screen and (max-width: 768px) {
  .layout-header {
    display: flex !important;
  }
  .layout-content {
    top: 56px;
  }
}
</style>
