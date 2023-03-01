// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@bg-dev/nuxt-naiveui", "@nuxt/devtools"],
  css: ["~/assets/fonts/gellix/style.css"],
});
