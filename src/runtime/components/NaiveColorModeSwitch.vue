<template>
    <n-button text @click="toggleColorMode" tag="span" :focusable="false">
        <NaiveIcon v-if="colorModePreference === 'dark'" name="ph:moon"></NaiveIcon>
        <NaiveIcon v-else-if="colorModePreference === 'light'" name="ph:sun"></NaiveIcon>
        <NaiveIcon v-else-if="colorModePreference === 'system'" name="ph:monitor"></NaiveIcon>
        <NaiveIcon v-else name="ph:dots-three"></NaiveIcon>
    </n-button>
</template>

<script setup lang="ts">
import NaiveIcon from "./NaiveIcon.vue"
import useNaiveColorMode from "../composables/useNaiveColorMode";
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