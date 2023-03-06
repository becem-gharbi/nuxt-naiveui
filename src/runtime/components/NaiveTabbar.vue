<template>
    <div :style="tabBarStyle">
        <NuxtLink v-for="route of routes" :to="route.path" :style="{ textDecoration: 'none' }">

            <n-button quaternary :focusable="false" :type="route.path === $route.path ? 'primary' : 'default'">
                <div class="tab-bar-item">
                    <NaiveIcon :name="route.path === $route.path ? route.iconSelected : route.iconUnselected"
                        :size="iconSize" />
                    <n-text :type="route.path === $route.path ? 'primary' : 'default'">{{
                        route.label }}</n-text>
                </div>
            </n-button>

        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { computed } from "#imports"
//@ts-ignore
import { NuxtLink } from "#components"
import type { StyleValue } from "vue"
import NaiveIcon from "./NaiveIcon.vue"
import useNaiveTheme from "../composables/useNaiveTheme"
import { TabbarRoute } from "../types"

withDefaults(defineProps<{
    routes: TabbarRoute[],
    iconSize?: number
}>(), {
    iconSize: 24
})

const naiveTheme = useNaiveTheme()

const tabBarStyle = computed<StyleValue>(() => ({
    position: "fixed",
    backgroundColor: naiveTheme.value?.common?.bodyColor,
    bottom: '0px',
    zIndex: 100,
    boxShadow: '0px 0px 2px 0px #a3a3a3',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '0px',
    width: "100vw",
    height: '56px',
    boxSizing: 'border-box',
}))

</script>

<style scoped>
.tab-bar-item {
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: space-around;
    align-items: center;
    font-size: small;
}
</style>

<style>
body {
    min-height: 100% !important;
    padding-bottom: 56px;
}
</style>