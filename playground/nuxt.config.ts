export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "Nuxt Naive UI",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

 // css: ["~/assets/fonts/gellix/style.css"],
  modules: ["../src/module", "@nuxtjs/tailwindcss"],
  naiveui: {
    colorModePreference: "light",
  },

  tailwindcss: {
    // exposeConfig: true,
  },
});
