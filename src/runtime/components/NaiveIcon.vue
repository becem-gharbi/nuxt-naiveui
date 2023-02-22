<!-- Based on https://github.com/nuxt-modules/icon/blob/main/src/runtime/Icon.vue -->
<script setup lang="ts">
//@ts-ignore
import { useState, ref, computed, watch, useRuntimeConfig } from '#imports'
import type { IconifyIcon } from '@iconify/vue'
import { Icon as Iconify } from '@iconify/vue/dist/offline'
import { loadIcon } from '@iconify/vue'

const config = useRuntimeConfig().public.naiveui

const props = defineProps<{ name: string; size?: string, color?: string }>()

const state = useState<Record<string, IconifyIcon | undefined>>('icons', () => ({}))
const isFetching = ref(false)
const iconName = computed(() => props.name)
const icon = computed<IconifyIcon | undefined>(() => state.value?.[iconName.value])
const sSize = computed(() => {
    const size = props.size || config.defaultIconSize
    if (String(Number(size)) === size) {
        return `${size}px`
    }
    return size
})

async function loadIconComponent() {
    if (!state.value?.[iconName.value]) {
        isFetching.value = true
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => undefined)
        isFetching.value = false
    }
}

watch(() => iconName.value, loadIconComponent)

await loadIconComponent()
</script>

<template>
    <n-icon :size="sSize" :color="color">
        <Iconify v-if="!isFetching" :icon="icon" :width="sSize" :height="sSize" />
    </n-icon>
</template>