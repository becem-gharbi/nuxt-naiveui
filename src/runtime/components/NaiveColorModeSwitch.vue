<template>
  <n-button
    text
    tag="span"
    :focusable="false"
    @click="toggleColorMode"
  >
    <NaiveIcon :name="icon" />
  </n-button>
</template>

<script setup lang="ts">
import { useNaiveColorMode, computed } from "#imports";
import type { ButtonProps } from "naive-ui";

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>();

const { colorModePreference } = useNaiveColorMode();

const preference = computed({
  get: () => colorModePreference.get(),
  set: value => colorModePreference.set(value)
})

const icon = computed(() => {
    switch (preference.value) {
    case "light":
      return "ph:sun";
    case "dark":
      return "ph:moon";
    case "system":
      return "ph:monitor";
    default:
      return "ph:dots-three";
  }
})

function toggleColorMode() {
  switch (preference.value) {
    case "light":
      preference.value = "dark";
      break;
    case "dark":
      preference.value = "system";
      break;
    case "system":
      preference.value = "light";
      break;
  }
}
</script>
