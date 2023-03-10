<template>
    <div :style="navbarStyle">
        <n-button text v-if="backIcon && isMobileOrTablet" @click="() => router.back()" tag="span">
            <NaiveIcon :name="backIcon as string" :size="backIconSize" />
        </n-button>

        <slot name="start"></slot>

        <nav :style="{ textAlign: menuPlacement, flex: 1 }">
            <n-drawer v-if="isMobileOrTablet" v-model:show="drawerActive" :placement="drawerPlacement" :width="drawerWidth">
                <n-drawer-content title="Menu" :body-content-style="{ padding: 0 }" :header-style="{
                    padding: '15px'
                }" :closable="drawerClosable">
                    <template #header>
                        <slot name="start"></slot>
                    </template>
                    <n-menu mode="vertical" :default-value="route.path" :inverted="menuInverted" :options="menuOptions" />
                </n-drawer-content>
            </n-drawer>

            <n-menu v-if="!isMobileOrTablet" :default-value="route.path" :inverted="menuInverted" mode="horizontal"
                :options="menuOptions" />
        </nav>

        <slot name="end"></slot>

        <n-button v-if="isMobileOrTablet" text @click="() => drawerActive = true" tag="span">
            <NaiveIcon :name="menuToggleIcon" :size="menuToggleIconSize"></NaiveIcon>
        </n-button>

    </div>
</template>

<script setup lang = "ts" >
//@ts-ignore
import { ref, computed, h, useRoute, watch, useRouter } from "#imports"
//@ts-ignore
import { NuxtLink } from "#components"
import type { StyleValue } from "vue"
import type { MenuOption } from "naive-ui"
import NaiveIcon from "./NaiveIcon.vue"
import useNaiveDevice from "../composables/useNaiveDevice"
import useNaiveTheme from "../composables/useNaiveTheme"
import type { NavbarRoute } from "../types"
import { NDrawer, NMenu, NDrawerContent, NButton } from "naive-ui"

const { isMobileOrTablet } = useNaiveDevice()

const drawerActive = ref(false)
const route = useRoute()
const router = useRouter()
watch(route, () => drawerActive.value = false)

const props = withDefaults(defineProps<{
    routes: NavbarRoute[],
    menuToggleIcon?: string,
    menuToggleIconSize?: number,
    backIcon?: boolean | string,
    backIconSize?: number,
    menuInverted?: boolean,
    menuPlacement?: "right" | "left" | "center",
    drawerPlacement?: "top" | "right" | "bottom" | "left",
    sticky?: boolean,
    drawerClosable?: boolean,
    drawerWidth?: string | number
}>(), {
    menuToggleIcon: "material-symbols:menu-rounded",
    menuPlacement: "left",
    drawerPlacement: "left",
    menuInverted: false,
    sticky: true,
    menuToggleIconSize: 26,
    backIcon: "material-symbols:arrow-back-sharp",
    backIconSize: 26,
})

const naiveTheme = useNaiveTheme()

const navbarStyle = computed<StyleValue>(() => ({
    position: props.sticky ? 'sticky' : 'static',
    backgroundColor: naiveTheme.value?.common?.bodyColor,
    top: "0px",
    zIndex: 100,
    padding: isMobileOrTablet ? "15px" : "10px 15px",
    boxShadow: '0px 0px 2px 0px #a3a3a3',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1em',
}))


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
