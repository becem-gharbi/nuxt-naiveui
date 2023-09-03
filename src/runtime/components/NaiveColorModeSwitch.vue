<template>
  <n-button
    text
    tag="span"
    :focusable="false"
    @click="toggleColorMode"
  >
    <NaiveIcon
      v-if="colorModePreference === 'dark'"
      name="ph:moon"
    />
    <NaiveIcon
      v-else-if="colorModePreference === 'light'"
      name="ph:sun"
    />
    <NaiveIcon
      v-else-if="colorModePreference === 'system'"
      name="ph:monitor"
    />
    <NaiveIcon
      v-else
      name="ph:dots-three"
    />
  </n-button>
</template>

<script setup lang="ts">
import { NaiveIcon } from "#components"
import { useNaiveColorMode } from "#imports";
import { NButton, ButtonProps } from "naive-ui"

interface Props extends /* @vue-ignore */ ButtonProps { }
defineProps<Props>()

const { colorModePreference } = useNaiveColorMode()

function toggleColorMode() {
    switch (colorModePreference.value) {
        case ("light"):
            colorModePreference.value = "dark"
            break
        case ("dark"):
            colorModePreference.value = "system"
            break
        case ("system"):
            colorModePreference.value = "light";
            break
    }
}
</script>