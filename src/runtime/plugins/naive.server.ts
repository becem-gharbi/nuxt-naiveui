import { setup } from "@css-render/vue3-ssr";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const { collect } = setup(nuxtApp.vueApp);
  nuxtApp.ssrContext!.head.push({
    style: () => collect()
      .split('</style>')
      .map((block) => {
        const id = RegExp(/cssr-id="(.+?)"/).exec(block)?.[1]
        const style = (RegExp(/>(.*)/s).exec(block)?.[1] ?? '').trim()
        return {
          ['cssr-id']: id,
          innerHTML: style,
        }
      })
  })
});
