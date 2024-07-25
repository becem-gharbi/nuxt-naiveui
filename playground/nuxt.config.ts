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
})
