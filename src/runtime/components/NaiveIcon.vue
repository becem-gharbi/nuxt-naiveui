<!-- Based on https://github.com/nuxt-modules/icon/blob/main/src/runtime/Icon.vue -->
<script setup lang="ts">
//@ts-ignore
import { useState, computed, watch, useRuntimeConfig } from '#imports'
import type { IconifyIcon } from '@iconify/vue'
import { Icon } from '@iconify/vue/dist/offline'
import { loadIcon } from '@iconify/vue'
import { NIconWrapper } from "naive-ui"

const config = useRuntimeConfig().public.naiveui

const props = defineProps<{ name: string; size?: number, color?: string, borderRadius?: number, iconColor?: string }>()

const state = useState<Record<string, IconifyIcon | undefined>>('naive_icons', () => ({}))
const iconName = computed(() => props.name)
const icon = computed<IconifyIcon | undefined>(() => state.value?.[iconName.value])
const sSize = computed(() => props.size || config.defaultIconSize)

async function loadIconComponent() {
    if (!state.value?.[iconName.value]) {
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => undefined)
    }
}

watch(() => iconName.value, loadIconComponent)

await loadIconComponent()
</script>

<template>
    <n-icon-wrapper :size="sSize" :border-radius="borderRadius" :color="color" :icon-color="iconColor">
        <Icon :icon="icon" :width="sSize" :height="sSize" />
    </n-icon-wrapper>
</template>