<template>
    <div class="container">
        <div class="brand">
            <n-text>Brand</n-text>
        </div>

        <div class="navigation">
            <n-drawer v-if="isMobileOrTablet" v-model:show="drawerActive" placement="left">
                <n-drawer-content title="Menu" closable>
                    <n-menu mode="vertical" :options="menuOptions" />
                </n-drawer-content>
            </n-drawer>

            <n-menu mode="horizontal" :options="menuOptions" />

            <n-button v-if="isMobileOrTablet" text @click="() => drawerActive = true">
                Menu
            </n-button>

            <n-text>Navigation</n-text>
        </div>

        <div class="extra">
            <n-text>Extra</n-text>
        </div>

    </div>
</template>

<script setup lang = "ts" >
import { ref } from "#imports"
import type { MenuOption } from "naive-ui"
import useNaiveDevice from "../composables/useNaiveDevice"

const { isMobileOrTablet } = useNaiveDevice()

const drawerActive = ref(false)

defineProps<{ menuOptions: MenuOption[] }>()
</script>

<style scoped>
.container {
    display: flex;
    justify-content: "space-between";
    align-items: "center";
    padding: 10px;
}
</style>
