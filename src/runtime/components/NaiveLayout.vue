<template>
  <n-layout style="min-height:100dvh">
    <n-layout-header
      v-if="hasHeader"
      bordered
      style="display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px;padding:0 16px;"
    >
      <slot name="start" />
      <div style="flex: 1">
        <NaiveMenuLink
          v-if="hasNavbar"
          :routes="routes"
          mode="horizontal"
        />
      </div>
      <slot name="end" />
      <n-button
        v-if="!hasNavbar"
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
      :has-sider="hasSidebar"
      :native-scrollbar="hasSidebar"
      :style="{top: hasHeader ? '56px':'0px'}"
    >
      <n-layout-sider
        v-if="hasSidebar"
        content-style="min-height:100dvh;display:flex;flex-direction:column;justify-content:space-between;gap:16px;padding:8px;"
        :native-scrollbar="false"
        bordered
      >
        <slot name="start" />
        <div style="flex: 1">
          <NaiveMenuLink
            v-if="hasSidebar"
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
import { computed, useNaiveDevice, ref, useRouter} from "#imports";
import type { MenuLinkRoute } from "../types";

const props = withDefaults(
  defineProps<{
    layout?: "navbar" | "sidebar";
    toggleIcon?: string;
    routes?: MenuLinkRoute[];
    drawerRoutes?: MenuLinkRoute[];
    drawerClosable?: boolean;
  }>(),
  {
    layout: "navbar",
    toggleIcon: "ph:equals",
    routes: () => [],
    drawerRoutes: () => [],
    drawerClosable: true,
  }
);

const drawerActive = ref(false);
const { isMobileOrTablet } = useNaiveDevice();
useRouter().afterEach(() => drawerActive.value = false)

const hasSidebar = computed(
  () => !isMobileOrTablet && props.layout === "sidebar"
);

const hasNavbar = computed(
  () => !isMobileOrTablet && props.layout === "navbar"
);

const hasHeader = computed(
  () => !hasSidebar.value
)
</script>