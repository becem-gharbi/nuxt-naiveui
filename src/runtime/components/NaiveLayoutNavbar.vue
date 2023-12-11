<template>
  <n-layout style="min-height:100dvh">
    <n-layout-header
      bordered
      style="display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px;padding:0 16px;"
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
      :has-sider="false"
      :native-scrollbar="false"
      style="top:56px;"
    >
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
      width="100%"
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
import { ref, useRouter} from "#imports";
import type { MenuLinkRoute } from "../types";

withDefaults(
  defineProps<{
    toggleIcon?: string;
    routes?: MenuLinkRoute[];
    drawerRoutes?: MenuLinkRoute[];
    drawerClosable?: boolean;
  }>(),
  {
    toggleIcon: "ph:equals",
    routes: () => [],
    drawerRoutes: () => [],
    drawerClosable: true,
  }
);

const drawerActive = ref(false);
useRouter().afterEach(() => drawerActive.value = false);
</script>