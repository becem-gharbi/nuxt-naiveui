export default defineNuxtConfig({

  modules: ['../src/module', '@nuxtjs/tailwindcss'], ssr: process.env.NUXT_SSR !== 'false',

  devtools: {
    enabled: false,
  },

  app: {
    head: {
      title: 'Nuxt Naive UI',
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-25',

  naiveui: {
    colorModePreference: 'light',
    iconDownload: true,
    spaLoadingTemplate: {
      name: 'bar-scale',
    },
    themeConfig: {
      light: {
        common: {
          primaryColor: 'rgb(29, 78, 216)',
        },
      },
      dark: {
        common: {
          bodyColor: 'rgb(16, 16, 20)',
          primaryColor: 'rgb(96, 165, 250)',
        },
      },
    },
  },

  tailwindcss: {
    viewer: false,
  },
})
