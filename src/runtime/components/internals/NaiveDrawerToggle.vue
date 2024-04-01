<template>
  <n-button
    class="mobileOrTablet"
    text
    aria-label="drawer-toggle-btn"
    :focusable="false"
  >
    <naive-icon
      :name="icon"
      :size="size"
    />
  </n-button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ icon?: string, size?: number }>(),
  { icon: 'ph:equals', size: 26 }
)
</script>
