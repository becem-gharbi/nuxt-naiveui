import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
})
  .overrideRules({
    'vue/multi-word-component-names': 'off',
  })
