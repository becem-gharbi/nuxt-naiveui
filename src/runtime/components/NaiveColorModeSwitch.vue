<template>
  <n-button
    text
    aria-label="color-mode-switch"
    :focusable="false"
    :disabled="disabled"
    @click="toggleColorMode"
  >
    <naive-icon :name="icon" />
  </n-button>
</template>

<script setup lang="ts">
import type { ButtonProps } from 'naive-ui'
import { useNaiveColorMode, computed } from '#imports'

interface Props extends /* @vue-ignore */ ButtonProps {
  iconLight?: string
  iconDark?: string
  iconSystem?: string
}
const props = withDefaults(defineProps<Props>(), {
  iconLight: 'ph:sun',
  iconDark: 'ph:moon',
  iconSystem: 'ph:monitor',
})

const { colorModePreference } = useNaiveColorMode()

const preference = computed({
  get: () => colorModePreference.get(),
  set: value => colorModePreference.set(value),
})

const disabled = computed(() => preference.value === 'light-only' || preference.value === 'dark-only')

const icon = computed(() => {
  switch (preference.value) {
    case 'light':
      return props.iconLight
    case 'dark':
      return props.iconDark
    case 'system':
      return props.iconSystem
    case 'light-only':
      return props.iconLight
    case 'dark-only':
      return props.iconDark
    default:
      return 'ph:dots-three'
  }
})

function toggleColorMode() {
  switch (preference.value) {
    case 'light':
      preference.value = 'dark'
      break
    case 'dark':
      preference.value = 'system'
      break
    case 'system':
      preference.value = 'light'
      break
  }
}
</script>
