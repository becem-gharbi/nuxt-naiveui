import { setup } from "@css-render/vue3-ssr";
import { defineNuxtPlugin, useRequestEvent } from "#app";
import { setResponseHeader } from "h3";

export default defineNuxtPlugin((nuxtApp) => {
  const event = useRequestEvent();
  setResponseHeader(event, "Accept-CH", "Sec-CH-Prefers-Color-Scheme");
  setResponseHeader(event, "Vary", "Sec-CH-Prefers-Color-Scheme");
  setResponseHeader(event, "Critical-CH", "Sec-CH-Prefers-Color-Scheme");

  const { collect } = setup(nuxtApp.vueApp);
  const originalRenderMeta = nuxtApp.ssrContext?.renderMeta;
  nuxtApp.ssrContext!.renderMeta = () => {
    if (!originalRenderMeta) {
      return {
        headTags: collect(),
      };
    }
    const originalMeta = originalRenderMeta();
    if ("then" in originalMeta) {
      return originalMeta.then((resolvedOriginalMeta) => {
        return {
          ...resolvedOriginalMeta,
          headTags: resolvedOriginalMeta["headTags"] + collect(),
        };
      });
    } else {
      return {
        ...originalMeta,
        headTags: originalMeta["headTags"] + collect(),
      };
    }
  };
});
