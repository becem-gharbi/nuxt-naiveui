import { setup } from "@css-render/vue3-ssr";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const { collect } = setup(nuxtApp.vueApp);

  nuxtApp.ssrContext?.head.hooks.hook("ssr:rendered", (ctx) => {
    ctx.html.headTags += collect();
  });
});
