<template>
  <n-button
    text
    aria-label="color-mode-switch"
    :focusable="false"
    @click="toggleColorMode"
  >
    <naive-icon :name="icon" />
  </n-button>
</template>

<script setup lang="ts">
import type { ButtonProps } from 'naive-ui'
import { useNaiveColorMode, computed } from '#imports'

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>()

const { colorModePreference } = useNaiveColorMode()

const preference = computed({
  get: () => colorModePreference.get(),
  set: value => colorModePreference.set(value)
})

const icon = computed(() => {
  switch (preference.value) {
    case 'light':
      return 'ph:sun'
    case 'dark':
      return 'ph:moon'
    case 'system':
      return 'ph:monitor'
    default:
      return 'ph:dots-three'
  }
})

function toggleColorMode () {
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
