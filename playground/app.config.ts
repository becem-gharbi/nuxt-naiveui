import { generateColorThemes } from '../src/runtime/utils'
import { defineAppConfig } from '#imports'

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      ...generateColorThemes(),
    },
  },
})
