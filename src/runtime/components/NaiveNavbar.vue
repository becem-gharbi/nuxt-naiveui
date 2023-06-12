<template>
    <div :style="navbarStyle">
        <div class="outer">

            <div :style="menuPlacement === 'center' ? { flex: 1 } : {}">
                <div class="inner-start">
                    <n-button class="mobileOrTablet" text v-if="backIcon" @click="() => router.back()" tag="span"
                        :focusable="false">
                        <NaiveIcon name="ph:arrow-left" :size="backIconSize" />
                    </n-button>

                    <slot name="start"></slot>
                </div>
            </div>

            <div v-if="!isMobileOrTablet" :style="{ flexGrow: 1, textAlign: menuPlacement }">
                <n-menu class="notMobileOrTablet" :default-value="route.path" :inverted="menuInverted" mode="horizontal"
                    :options="menuOptions" />
            </div>

            <div :style="menuPlacement === 'center' ? { flex: 1 } : {}">
                <div class="inner-end">
                    <slot name="end"></slot>

                    <n-button class="mobileOrTablet" v-if="menuOptions.length > 0" text @click="() => drawerActive = true"
                        tag="span" :focusable="false">
                        <slot name="toggle">
                            <NaiveIcon :name="menuToggleIcon" :size="menuToggleIconSize"></NaiveIcon>
                        </slot>
                    </n-button>
                </div>
            </div>

        </div>

        <n-drawer v-if="menuOptions.length > 0" v-model:show="drawerActive" :placement="drawerPlacement"
            :width="drawerWidth">

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
    top: 0,
    zIndex: 100
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


<style scoped>
.outer {
    height: 56px;
    padding: 0 16px;
    box-shadow: 0px 0px 2px 0px #a3a3a3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

.inner-start {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}

.inner-end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
}
</style>