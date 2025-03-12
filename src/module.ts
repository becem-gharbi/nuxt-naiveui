import path from 'node:path'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  addComponent,
  addImports,
  extendViteConfig,
  addTypeTemplate,
} from '@nuxt/kit'
import naive from 'naive-ui'
import { defu } from 'defu'
import { name, version } from '../package.json'
import iconifyVitePlugin from './build/iconify'
import type { PublicConfig } from './runtime/types'
import { mergeThemeConfig } from './runtime/themes/merge'

// Module options TypeScript inteface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions extends PublicConfig { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'naiveui',
    compatibility: {
      nuxt: '>=3.16.0',
    },
  },

  // Default configuration options of the Nuxt module
  defaults: {
    colorModePreference: 'light',
    colorModePreferenceCookieName: 'naive_color_mode_preference',
    iconSize: 20,
    iconDownload: false,
    iconCollectionsUrl: 'https://iconify-icon-sets.netlify.app',
    themeConfig: {},
  },

  // Add types for volar
  hooks: {
    'prepare:types': ({ references }) => {
      references.push({
        types: 'naive-ui/volar',
      })
    },
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Add assets
    nuxt.options.css.push(resolve('./runtime/assets/style.css'))

    // Pass module options to runtimeConfig object
    // @ts-expect-error icon size can be number or string
    nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public, {
      naiveui: {
        colorModePreference: options.colorModePreference,
        colorModePreferenceCookieName: options.colorModePreferenceCookieName,
        iconDownload: options.iconDownload,
        iconCollectionsUrl: options.iconCollectionsUrl,
        iconSize: options.iconSize,
        spaLoadingTemplate: options.spaLoadingTemplate,
        themeConfig: mergeThemeConfig(options.themeConfig),
      },
    })

    // Add plugins
    addPlugin(resolve('./runtime/plugins/naive.server'))
    addPlugin(resolve('./runtime/plugins/colorMode'))

    // Add composables directory
    addImportsDir(resolve('./runtime/composables'))

    // Add components
    addComponent({
      name: 'NaiveConfig',
      filePath: resolve('./runtime/components/NaiveConfig.vue'),
    })
    addComponent({
      name: 'NaiveNavbar',
      filePath: resolve('./runtime/components/NaiveNavbar.vue'),
    })
    addComponent({
      name: 'NaiveColorModeSwitch',
      filePath: resolve('./runtime/components/NaiveColorModeSwitch.vue'),
    })
    addComponent({
      name: 'NaiveTabbar',
      filePath: resolve('./runtime/components/NaiveTabbar.vue'),
    })
    addComponent({
      name: 'NaiveMenuLink',
      filePath: resolve('./runtime/components/NaiveMenuLink.vue'),
    })
    addComponent({
      name: 'NaiveLayoutSidebar',
      filePath: resolve('./runtime/components/NaiveLayoutSidebar.vue'),
    })
    addComponent({
      name: 'NaiveLayoutNavbar',
      filePath: resolve('./runtime/components/NaiveLayoutNavbar.vue'),
    })
    addComponent({
      name: 'NaiveDrawerLink',
      filePath: resolve('./runtime/components/NaiveDrawerLink.client.vue'),
    })
    addComponent({
      name: 'NaiveLoadingBar',
      filePath: resolve('./runtime/components/NaiveLoadingBar.client.vue'),
    })
    addComponent({
      name: 'NaiveNotification',
      filePath: resolve('./runtime/components/NaiveNotification.client.vue'),
    })
    addComponent({
      name: 'NaiveIcon',
      filePath: resolve('./runtime/components',
        options?.iconDownload ? 'NaiveIconOffline.vue' : 'NaiveIcon.vue'),
    })

    // Add imports for naive-ui components
    const naiveComponents = Object.keys(naive).filter(name =>
      /^N[A-Z]|n-[a-z]/.test(name),
    )

    const naiveClientOnlyComponents = [
      'NDrawer',
      'NDrawerContent',
      'NModal',
    ]

    naiveComponents.forEach((name) => {
      addComponent({
        export: name,
        name,
        filePath: 'naive-ui',
        mode: naiveClientOnlyComponents.includes(name) ? 'client' : 'all',
      })
    })

    // Add imports for naive-ui composables
    const naiveComposables = [
      'useDialog',
      'useMessage',
      'useNotification',
      'useLoadingBar',
      'useDialogReactiveList',
      'useThemeVars',
      'useModal',
    ]

    naiveComposables.forEach((name) => {
      addImports({
        name,
        as: name,
        from: 'naive-ui',
      })
    })

    if (process.env.NODE_ENV === 'development') {
      // Fix `vueuc` imports
      nuxt.options.build.transpile.push('naive-ui')

      // Fix transpilation of `@juggle/resize-observer`
      extendViteConfig((config) => {
        config.plugins ||= []
        config.plugins.push({
          name: 'fix-transpile-juggle-resize-observer',
          enforce: 'pre',
          transform(code, id) {
            if (id.includes('@juggle/resize-observer/lib/algorithms/calculateBoxSize.js')) {
              return code.replace('global.navigator && global.navigator.userAgent', 'global.navigator?.userAgent')
            }
          },
        })
      })
    }
    else {
      nuxt.options.build.transpile.push('naive-ui', 'vueuc', '@css-render/vue3-ssr', '@iconify/vue')
    }

    // https://github.com/becem-gharbi/iconify-offline-nuxt
    if (options?.iconDownload) {
      extendViteConfig((config) => {
        config.plugins ||= []
        const iconsDir = path.resolve(nuxt.options.rootDir, 'public/iconify')
        config.plugins.push(iconifyVitePlugin(iconsDir, options.iconCollectionsUrl))
      })
    }

    if (options.spaLoadingTemplate && typeof nuxt.options.spaLoadingTemplate !== 'string') {
      nuxt.options.spaLoadingTemplate = resolve(`./runtime/templates/${options.spaLoadingTemplate.name}.html`)
    }

    addTypeTemplate({
      filename: 'types/naiveui.d.ts',
      getContents: () => `
      import {RouteLocationRaw} from '#vue-router'
      export interface MenuLinkRoute {
        label: string
        icon?: string
        to?: RouteLocationRaw
        children?: MenuLinkRoute[]
      }
      export interface TabbarRoute {
        label: string
        iconSelected: string
        iconUnselected: string
        to: RouteLocationRaw
      }`,
    })
  },
})
