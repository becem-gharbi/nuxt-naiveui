export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/fonts/gellix/style.css"],
  modules: ["@nuxtjs/tailwindcss", "../src/module"],
  naiveui: {
    defaultColorMode: "system",
  },
});
