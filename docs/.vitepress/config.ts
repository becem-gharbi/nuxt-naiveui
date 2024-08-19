import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuxt Naive UI',
  description: 'Unofficial Naive UI integration for Nuxt',
  themeConfig: {
    logo: '/logo.svg',

    search: {
      provider: 'local',
    },

    sidebar: [
      {
        text: 'Get Started',
        base: '/get-started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Setup', link: '/setup' },
        ],
      },
      {
        text: 'Components',
        base: '/components',
        items: [
          { text: 'NaiveConfig', link: '/naive-config' },
          { text: 'NaiveIcon', link: '/naive-icon' },
          { text: 'NaiveNavbar', link: '/naive-navbar' },
          { text: 'NaiveTabbar', link: '/naive-tabbar' },
          { text: 'NaiveColorModeSwitch', link: '/naive-color-mode-switch' },
          { text: 'NaiveLayoutNavbar', link: '/naive-layout-navbar' },
          { text: 'NaiveLayoutSidebar', link: '/naive-layout-sidebar' },
        ],
      },
      {
        text: 'Composables',
        base: '/composables',
        items: [
          { text: 'useNaiveColorMode', link: '/useNaiveColorMode' },
          { text: 'useNaiveDevice', link: '/useNaiveDevice' },
          { text: 'useNaiveForm', link: '/useNaiveForm' },
          { text: 'useNaiveNotification', link: '/useNaiveNotification' },
          { text: 'useNaiveLoadingBar', link: '/useNaiveLoadingBar' },
        ],
      },
      {
        text: 'Tailwind CSS',
        link: 'tailwind-css',
      },
      {
        text: 'Upgrades',
        base: '/upgrades',
        items: [
          { text: 'v2', link: '/v2' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/becem-gharbi/nuxt-naiveui' },
    ],
  },
})
