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
import { useNaiveColorMode, ref } from "#imports";
import type { ButtonProps } from "naive-ui";

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>();

const { colorModePreference } = useNaiveColorMode();

const preference = ref(colorModePreference.get());
const icon = ref(getIcon());

function toggleColorMode() {
  switch (preference.value) {
    case "light":
      colorModePreference.set("dark");
      preference.value = "dark";
      break;
    case "dark":
      colorModePreference.set("system");
      preference.value = "system";
      break;
    case "system":
      colorModePreference.set("light");
      preference.value = "light";
      break;
  }

  icon.value = getIcon();
}

function getIcon() {
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
}
</script>
