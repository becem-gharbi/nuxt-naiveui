<template>
    <div class="container">
        <n-text>Brand</n-text>

        <div class="navigation">
            <n-drawer v-if="isMobileOrTablet" v-model:show="drawerActive" placement="left">
                <n-drawer-content title="Menu" closable :body-content-style="{ padding: 0 }">
                    <n-menu mode="vertical" :options="menuOptions" @click="() => drawerActive = false" />
                </n-drawer-content>
            </n-drawer>

            <n-menu v-if="!isMobileOrTablet" mode="horizontal" :options="menuOptions" />
        </div>

        <n-text>Extra</n-text>

        <n-button v-if="isMobileOrTablet" text @click="() => drawerActive = true">
            <NaiveIcon name="material-symbols:menu-rounded" size="24"></NaiveIcon>
        </n-button>

    </div>
</template>

<script setup lang = "ts" >
//@ts-ignore
import { ref, computed, h } from "#imports"
//@ts-ignore
import { NuxtLink } from "#components"
import type { MenuOption } from "naive-ui"
import NaiveIcon from "./NaiveIcon.vue"
import useNaiveDevice from "../composables/useNaiveDevice"
import type { NavbarRoute } from "../types"

const { isMobileOrTablet } = useNaiveDevice()

const drawerActive = ref(false)

const props = defineProps<{ routes: NavbarRoute[] }>()

const menuOptions = computed<MenuOption[]>(() => {
    const result: MenuOption[] = []
    const cb = (e: NavbarRoute) => {
        result.push({
            label: e.to ? () => h(NuxtLink, { to: e.to }, { default: () => e.label }) : e.label,
            icon: e.icon ? () => h(NaiveIcon, { name: e.icon }) : undefined,
            key: e.label,
        });
        e.children && e.children.forEach(cb);
    }
    props.routes?.forEach(cb);
    return result
})
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 2px red solid;
    gap: 1em;
}

.navigation {
    flex: 1;
}
</style>
