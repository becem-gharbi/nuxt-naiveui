<template>
  <n-drawer
    :show="show"
    :width="width"
    :placement="drawerPlacement"
    :on-update:show="(v: boolean) => emits('update:show', v)"
  >
    <n-drawer-content
      :body-content-style="{ padding: '8px' }"
      :header-style="{ padding: '16px' }"
      :footer-style="{ justifyContent: 'start' }"
      :closable="closable"
    >
      <template #header>
        <slot name="header" />
      </template>

      <LazyNaiveMenuLink
        mode="vertical"
        :routes="routes"
      />

      <template #footer>
        <slot name="footer" />
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { useRouter } from "#imports";
import type { MenuLinkRoute } from "../types";

withDefaults(
    defineProps<{
    show: boolean;
    routes?: MenuLinkRoute[];
    closable?: boolean;
    drawerPlacement?: string;
    width?: string | number;
  }>(),
    {
    show: false,
    routes: () => [],
    closable: true,
    drawerPlacement: 'left',
    width: '100%'
  }
);

const emits = defineEmits(['update:show'])

useRouter().afterEach(() => emits('update:show', false));
</script>
