<template>
  <n-button
    class="naive-mobile-or-tablet"
    text
    aria-label="drawer-toggle-btn"
    :focusable="false"
  >
    <slot name="toggle">
      <naive-icon
        :name="icon"
        :size="size"
      />
    </slot>
  </n-button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ icon?: string, size?: number | string }>(),
  { icon: 'ph:equals', size: 26 },
)
</script>
