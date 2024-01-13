export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "Nuxt Naive UI",
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  // css: ["~/assets/fonts/gellix/style.css"],
  modules: ["../src/module"],
  naiveui: {
    colorModePreference: "light",
  }
});
