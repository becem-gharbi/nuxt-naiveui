<!-- Based on https://github.com/nuxt-modules/icon/blob/main/src/runtime/Icon.vue -->
<script setup lang="ts">
//@ts-ignore
import { useNuxtApp, useState, ref, computed, watch, useRuntimeConfig } from '#imports'
import type { IconifyIcon } from '@iconify/vue'
import { Icon as Iconify } from '@iconify/vue/dist/offline'
import { loadIcon } from '@iconify/vue'

const nuxtApp = useNuxtApp()
const config = useRuntimeConfig().public.naiveui

const props = defineProps<{ name: string; size?: string | number }>()

const state = useState<Record<string, IconifyIcon | undefined>>('icons', () => ({}))
const isFetching = ref(false)
const iconName = computed(() => props.name)
const icon = computed<IconifyIcon | undefined>(() => state.value?.[iconName.value])
const component = computed(() => nuxtApp.vueApp.component(iconName.value))
const sSize = computed(() => {
    const size = props.size || config.defaultIconSize
    if (String(Number(size)) === size) {
        return `${size}px`
    }
    return size
})

async function loadIconComponent() {
    if (component.value) {
        return
    }
    if (!state.value?.[iconName.value]) {
        isFetching.value = true
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => undefined)
        isFetching.value = false
    }
}

watch(() => iconName.value, loadIconComponent)

!component.value && await loadIconComponent()
</script>

<template>
    <span v-if="isFetching" :width="sSize" :height="sSize" />
    <Iconify v-else-if="icon" :icon="icon" :width="sSize" :height="sSize" />
    <Component :is="component" v-else-if="component" :width="sSize" :height="sSize" />
    <span v-else :style="{ fontSize: sSize, lineHeight: sSize, width: sSize, height: sSize }">{{ name
    }}</span>
</template>

<style scoped>
.icon {
    display: inline-block;
    vertical-align: middle;
}
</style>