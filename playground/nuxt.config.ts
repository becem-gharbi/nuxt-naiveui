export default defineNuxtConfig({
  ssr: process.env.NUXT_SSR !== 'false',

  future: {
    compatibilityVersion: 4,
  },

  devtools: {
    enabled: false,
  },

  app: {
    head: {
      title: 'Nuxt Naive UI',
    },
  },

  modules: ['../src/module', '@nuxtjs/tailwindcss'],

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

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
      },
    },
  },

  compatibilityDate: '2024-07-25',
})
