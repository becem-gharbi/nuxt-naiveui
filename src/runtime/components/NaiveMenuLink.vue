<template>
  <n-menu
    :value="activeKey"
    :options="menuOptions"
  />
</template>

<script setup lang="ts">
import { computed, h, useRoute } from "#imports";
import { NuxtLink, NaiveIcon } from "#components";
import type { Component } from "vue";
import type { MenuProps, MenuOption } from "naive-ui";
import type { MenuLinkRoute } from "../types";

interface NaiveMenuLinkProps
    extends /* @vue-ignore */ Omit<MenuProps, "options" | "value"> {
    routes: MenuLinkRoute[];
}

const props = defineProps<NaiveMenuLinkProps>();

const currentRoute = useRoute()

// check if deprecated path logic is used
const isDeprecatedKey = computed(() => props.routes.some(checkPath))
const checkPath = (m: MenuLinkRoute): boolean => !!m.path || m.children?.some(checkPath) || false

// The menu's active key
const activeKey = computed(() => isDeprecatedKey.value
    ? getActiveKey(currentRoute.path)
    : currentRoute.name?.toString()
)

function getActiveKey(activePath: string) {
    let activeKey = activePath

    const cb = (routes: MenuLinkRoute[]) => {
        for (const route of routes) {
            if (route.path === activePath) {
                activeKey = route.path
                break
            }
            if (route.path && activePath.startsWith(`${route.path}/`)) {
                activeKey = route.path;
            }
            if (route.children) {
                cb(route.children);
            }
        }
    };

    cb(props.routes)
    return activeKey
}

const menuOptions = computed<MenuOption[]>(() => {
    const cb = (routes: MenuLinkRoute[]) =>
        routes.map((route) => {
            const key = (isDeprecatedKey.value ? route.path : route.key?.toString()) ?? route.label
            const to = isDeprecatedKey.value ? route.path : route.to

            const menuOption: MenuOption = {
                label: to
                    ? () => h(NuxtLink, { to }, { default: () => route.label })
                    : route.label,
                icon: route.icon
                    ? () => h(NaiveIcon as Component, { name: route.icon })
                    : undefined,
                key,
            };
            if (route.children) {
                menuOption.children = cb(route.children);
            }
            return menuOption;
        });

    return cb(props.routes);
});
</script>
