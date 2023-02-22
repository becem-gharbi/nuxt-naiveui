<template>
    <div class="container">
        <slot name="brand"></slot>

        <div class="navigation" :style="{ textAlign: navigationPlace }">
            <n-drawer v-if="isMobileOrTablet" v-model:show="drawerActive" :placement="drawerPlace">
                <n-drawer-content title="Menu" closable :body-content-style="{ padding: 0 }" :header-style="{
                    padding: '15px'
                }">
                    <template #header>
                        <slot name="brand"></slot>
                    </template>
                    <n-menu mode="vertical" :default-value="$route.path" inverted :options="menuOptions" />
                </n-drawer-content>
            </n-drawer>

            <n-menu v-if="!isMobileOrTablet" :default-value="$route.path" inverted mode="horizontal"
                :options="menuOptions" />
        </div>

        <slot name="extra"></slot>

        <n-button v-if="isMobileOrTablet" text @click="() => drawerActive = true">
            <NaiveIcon :name="menuIcon" :size="menuIconSize"></NaiveIcon>
        </n-button>

    </div>
</template>

<script setup lang = "ts" >
//@ts-ignore
import { ref, computed, h, useRoute, watch } from "#imports"
//@ts-ignore
import { NuxtLink } from "#components"
import type { MenuOption } from "naive-ui"
import NaiveIcon from "./NaiveIcon.vue"
import useNaiveDevice from "../composables/useNaiveDevice"
import type { NavbarRoute } from "../types"
import { NDrawer, NMenu, NDrawerContent, NButton } from "naive-ui"

const { isMobileOrTablet } = useNaiveDevice()

const drawerActive = ref(false)
const route = useRoute()
watch(route, () => drawerActive.value = false)

const props = withDefaults(defineProps<{ routes: NavbarRoute[], menuIcon?: string, menuIconSize?: number, navigationPlace?: "right" | "left" | "center", drawerPlace?: "top" | "right" | "bottom" | "left" }>(), {
    menuIcon: "material-symbols:menu-rounded",
    navigationPlace: "left",
    drawerPlace: "left",
    menuIconSize: 20
})

const menuOptions = computed<MenuOption[]>(() => {
    const cb = (routes: NavbarRoute[]) => routes.map(route => {

        const menuOption: MenuOption =
        {
            label: route.path ? () => h(NuxtLink, { to: route.path }, { default: () => route.label }) : route.label,
            icon: route.icon ? () => h(NaiveIcon, { name: route.icon }) : undefined,
            key: route.path || route.label,
        }

        if (route.children) {
            menuOption.children = cb(route.children);
        }

        return menuOption;
    });

    return cb(props.routes)
})
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    gap: 1em;
}

.navigation {
    flex: 1;
}
</style>
