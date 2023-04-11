<template>
    <div :style="navbarStyle">
        <n-button class="mobileOrTablet" text v-if="backIcon" @click="() => router.back()" tag="span" :focusable="false">
            <NaiveIcon name="ph:arrow-left" :size="backIconSize" />
        </n-button>

        <slot name="start"></slot>

        <nav v-if="menuOptions.length > 0" :style="{ textAlign: menuPlacement, flex: 1 }">
            <n-drawer v-model:show="drawerActive" :placement="drawerPlacement" :width="drawerWidth">

                <n-drawer-content title="Menu" :body-content-style="{ padding: 0 }" :header-style="{
                    padding: '15px'
                }" :footer-style="{ justifyContent: 'start' }" :closable="drawerClosable">

                    <template #header>
                        <slot name="drawer-header"></slot>
                    </template>

                    <n-menu mode="vertical" :default-value="route.path" :inverted="menuInverted" :options="menuOptions" />

                    <template #footer>
                        <slot name="drawer-footer"></slot>
                    </template>
                </n-drawer-content>

            </n-drawer>

            <n-menu class="notMobileOrTablet" v-if="!isMobileOrTablet" :default-value="route.path" :inverted="menuInverted"
                mode="horizontal" :options="menuOptions" />
        </nav>

        <slot name="end"></slot>

        <n-button class="mobileOrTablet" v-if="menuOptions.length > 0" text @click="() => drawerActive = true" tag="span"
            :focusable="false">
            <slot name="toggle">
                <NaiveIcon :name="menuToggleIcon" :size="menuToggleIconSize"></NaiveIcon>
            </slot>
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
import useNaiveTheme from "../composables/useNaiveTheme"
import type { NavbarRoute } from "../types"
import { NDrawer, NMenu, NDrawerContent, NButton } from "naive-ui"
import useNaiveDevice from "../composables/useNaiveDevice"

const drawerActive = ref(false)
const route = useRoute()
const router = useRouter()
const { isMobileOrTablet } = useNaiveDevice()
watch(route, () => drawerActive.value = false)

const props = withDefaults(defineProps<{
    routes?: NavbarRoute[],
    menuToggleIcon?: string,
    menuToggleIconSize?: number,
    backIcon?: boolean,
    backIconSize?: number,
    menuInverted?: boolean,
    menuPlacement?: "right" | "left" | "center",
    drawerPlacement?: "top" | "right" | "bottom" | "left",
    sticky?: boolean,
    drawerClosable?: boolean,
    drawerWidth?: string | number
}>(), {
    routes: () => [],
    menuToggleIcon: "ph:equals",
    menuPlacement: "left",
    drawerPlacement: "left",
    menuInverted: false,
    sticky: true,
    menuToggleIconSize: 26,
    backIcon: false,
    backIconSize: 26,
    drawerWidth: "100%"
})

const naiveTheme = useNaiveTheme()

const navbarStyle = computed<StyleValue>(() => ({
    position: props.sticky ? 'sticky' : 'static',
    backgroundColor: naiveTheme.value?.common?.bodyColor,
    top: "0px",
    height: "56px",
    zIndex: 100,
    padding: "0 15px",
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
