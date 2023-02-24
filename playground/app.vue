<template>
  <NaiveConfig :theme-config="themeConfig">
    <NaiveNavbar :routes="navbarRoutes" :menu-inverted="false">

      <template #start>
        <div class="brand">
          <NaiveIcon name="logos:naiveui"></NaiveIcon>
          <n-text strong>nuxt-naiveui</n-text>
        </div>
      </template>

      <template #end>
        <NuxtLink to="https://github.com/becem-gharbi/nuxt-naiveui" target="_">
          <n-button text>
            <NaiveIcon name="cib:github" />
          </n-button>
        </NuxtLink>
        <NaiveColorModeSwitch />
      </template>

    </NaiveNavbar>

    <n-result title="OK" description="bla bla bla"></n-result>
    <NuxtPage></NuxtPage>

  </NaiveConfig>
</template>


<script setup lang="ts">
import { ThemeConfig, NavbarRoute } from "@bg-dev/nuxt-naiveui"

const navbarRoutes: NavbarRoute[] = [
  {
    label: "Sample",
    icon: "ri:home-4-line",
    path: "/"
  },
  {
    label: "Categories",
    icon: "mdi:bookmark-multiple-outline",
    children: [
      {
        label: "Books",
        icon: "material-symbols:menu-book-outline-rounded",
        path: "/books"
      },
      {
        label: "Computers",
        icon: "material-symbols:computer-outline",
        path: "/computers"
      }
    ]
  }
]

const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: "Gellix",

    }
  },
}
</script>


<style scoped>
.brand {
  display: flex;
  align-items: center;
  gap: 1em
}
</style>