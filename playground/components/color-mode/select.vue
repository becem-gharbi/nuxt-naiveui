<template>
  <n-select
    v-model:value="preference"
    data-testid="color-mode-select"
    :options="colorModeSelectOptions"
  />
</template>

<script setup lang="ts">
import type { SelectOption } from 'naive-ui'
import { useNaiveColorMode, computed, ref } from '#imports'

const { colorModePreference } = useNaiveColorMode()

const preference = computed({
  get: () => colorModePreference.get(),
  set: value => colorModePreference.set(value),
})

const colorModeSelectOptions = ref<SelectOption[]>([
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'Dark',
    value: 'dark',
  }, {
    label: 'System',
    value: 'system',
  },
])
</script>
