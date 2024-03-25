<template>
  <n-drawer
    :show="show"
    :width="width"
    :placement="placement"
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

      <lazy-naive-menu-link mode="vertical" :routes="routes" />

      <template #footer>
        <slot name="footer" />
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import type { MenuLinkRoute } from '../types'
import { useRouter } from '#imports'

withDefaults(
  defineProps<{
    show: boolean;
    routes?: MenuLinkRoute[];
    closable?: boolean;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    width?: string | number;
  }>(),
  {
    show: false,
    routes: () => [],
    closable: true,
    placement: 'left',
    width: '100%'
  }
)

const emits = defineEmits(['update:show'])

useRouter().afterEach(() => emits('update:show', false))
</script>
