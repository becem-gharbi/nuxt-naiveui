<template>
  <n-el
    tag="nav"
    :style="`
        background-color: var(--body-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 0px 16px;
        height: 56px;
        position: ${sticky ? 'sticky' : 'static'};
        top: 0;
        z-index: 100;
        box-shadow: 0px 0px 2px 0px #a3a3a3;
      `"
  >
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '12px',
        flex: flexInnerSides,
        width: 'fit-content',
      }"
    >
      <n-button
        v-if="backIcon"
        class="mobileOrTablet"
        text
        aria-label="back-btn"
        :focusable="false"
        @click="router.back"
      >
        <NaiveIcon
          name="ph:arrow-left"
          :size="backIconSize"
        />
      </n-button>

      <naive-drawer-toggle
        v-if="menuTogglePlacement === 'left'"
        :icon="menuToggleIcon"
        :size="menuToggleIconSize"
        @click="drawerActive = true"
      >
        <template #toggle>
          <slot name="toggle" />
        </template>
      </naive-drawer-toggle>
      <slot name="start" />
    </div>

    <div
      v-if="!isMobileOrTablet"
      class="notMobileOrTablet"
      :style="{
        flexGrow: 1,
        textAlign: menuPlacement,
      }"
    >
      <lazy-naive-menu-link
        :inverted="menuInverted"
        mode="horizontal"
        :routes="routes"
      />
    </div>

    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '12px',
        flex: flexInnerSides,
      }"
    >
      <slot name="end" />

      <naive-drawer-toggle
        v-if="menuTogglePlacement === 'right'"
        :icon="menuToggleIcon"
        :size="menuToggleIconSize"
        @click="drawerActive = true"
      >
        <template #toggle>
          <slot name="toggle" />
        </template>
      </naive-drawer-toggle>
    </div>
  </n-el>

  <lazy-naive-drawer-link
    v-model:show="drawerActive"
    :placement="drawerPlacement"
    :width="drawerWidth"
    :routes="drawerRoutes"
    :closable="drawerClosable"
  >
    <template #header>
      <slot name="drawer-header" />
    </template>

    <slot name="drawer-content" />

    <template #footer>
      <slot name="drawer-footer" />
    </template>
  </lazy-naive-drawer-link>
</template>

<script setup lang="ts">
import NaiveDrawerToggle from './internals/NaiveDrawerToggle.vue'
import type { MenuLinkRoute } from '#build/types/naiveui'
import {
  ref,
  computed,
  useRouter,
  useNaiveDevice
} from '#imports'

const drawerActive = ref(false)
const router = useRouter()
const { isMobileOrTablet } = useNaiveDevice()

const props = withDefaults(
  defineProps<{
    routes?: MenuLinkRoute[];
    drawerRoutes?: MenuLinkRoute[];
    menuToggleIcon?: string;
    menuToggleIconSize?: number | string;
    backIcon?: boolean;
    backIconSize?: number | string;
    menuInverted?: boolean;
    menuPlacement?: 'right' | 'left' | 'center';
    menuTogglePlacement?: 'right' | 'left';
    drawerPlacement?: 'top' | 'right' | 'bottom' | 'left';
    sticky?: boolean;
    drawerClosable?: boolean;
    drawerWidth?: string | number;
  }>(),
  {
    routes: () => [],
    drawerRoutes: () => [],
    menuToggleIcon: 'ph:equals',
    menuPlacement: 'left',
    menuTogglePlacement: 'right',
    drawerPlacement: 'left',
    menuInverted: false,
    sticky: true,
    menuToggleIconSize: 26,
    backIcon: false,
    backIconSize: 26,
    drawerWidth: '100%',
    drawerClosable: true
  }
)

const flexInnerSides = computed(() =>
  props.menuPlacement === 'center' ? 1 : 'inherit'
)
</script>
