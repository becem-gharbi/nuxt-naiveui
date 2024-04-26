import { fileURLToPath } from 'url'
import path from 'path'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  addComponent,
  addImports,
  extendViteConfig,
  addTypeTemplate
} from '@nuxt/kit'
import naive from 'naive-ui'
import { name, version } from '../package.json'
import iconifyVitePlugin from './build/iconify'
import type { PublicConfig } from './runtime/types'
import { defu } from 'defu'

// Module options TypeScript inteface definition
export interface ModuleOptions extends PublicConfig { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'naiveui',
    compatibility: {
      nuxt: '^3.10.0'
    }
  },

  // Default configuration options of the Nuxt module
  defaults: {
    colorModePreference: 'light',
    colorModePreferenceCookieName: 'naive_color_mode_preference',
    iconSize: 20,
    iconDownload: false,
    iconCollectionsUrl: 'https://iconify-icon-sets.vercel.app',
    themeConfig: {}
  },

  // Add types for volar
  hooks: {
    'prepare:types': ({ references }) => {
      references.push({
        types: 'naive-ui/volar'
      })
    }
  },

  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    // Add assets
    nuxt.options.css.push(resolve(runtimeDir, 'assets', 'style.css'))

    // Pass module options to runtimeConfig object
    nuxt.options.runtimeConfig = defu(nuxt.options.runtimeConfig, {
      app: {},
      public: {
        naiveui: {
          colorModePreference: options.colorModePreference,
          colorModePreferenceCookieName: options.colorModePreferenceCookieName,
          iconDownload: options.iconDownload,
          iconCollectionsUrl: options.iconCollectionsUrl,
          themeConfig: options.themeConfig,
          iconSize: options.iconSize as any,
          spaLoadingTemplate: options.spaLoadingTemplate
        }
      }
    })

    // Add plugins
    addPlugin(resolve(runtimeDir, 'plugins', 'naive.server'))
    addPlugin(resolve(runtimeDir, 'plugins', 'colorMode'))

    // Add composables directory
    addImportsDir(resolve(runtimeDir, 'composables'))

    // Add components
    addComponent({
      name: 'NaiveConfig',
      filePath: resolve(runtimeDir, 'components', 'NaiveConfig.vue')
    })
    addComponent({
      name: 'NaiveNavbar',
      filePath: resolve(runtimeDir, 'components', 'NaiveNavbar.vue')
    })
    addComponent({
      name: 'NaiveColorModeSwitch',
      filePath: resolve(runtimeDir, 'components', 'NaiveColorModeSwitch.vue')
    })
    addComponent({
      name: 'NaiveTabbar',
      filePath: resolve(runtimeDir, 'components', 'NaiveTabbar.vue')
    })
    addComponent({
      name: 'NaiveMenuLink',
      filePath: resolve(runtimeDir, 'components', 'NaiveMenuLink.vue')
    })
    addComponent({
      name: 'NaiveLayoutSidebar',
      filePath: resolve(runtimeDir, 'components', 'NaiveLayoutSidebar.vue')
    })
    addComponent({
      name: 'NaiveLayoutNavbar',
      filePath: resolve(runtimeDir, 'components', 'NaiveLayoutNavbar.vue')
    })
    addComponent({
      name: 'NaiveDrawerLink',
      filePath: resolve(runtimeDir, 'components', 'NaiveDrawerLink.client.vue')
    })
    addComponent({
      name: 'NaiveLoadingBar',
      filePath: resolve(runtimeDir, 'components', 'NaiveLoadingBar.client.vue')
    })
    addComponent({
      name: 'NaiveNotification',
      filePath: resolve(runtimeDir, 'components', 'NaiveNotification.client.vue')
    })
    addComponent({
      name: 'NaiveIcon',
      filePath: resolve(runtimeDir, 'components',
        options?.iconDownload ? 'NaiveIconOffline.vue' : 'NaiveIcon.vue')
    })

    // Add imports for naive-ui components
    const naiveComponents = Object.keys(naive).filter(name =>
      /^(N[A-Z]|n-[a-z])/.test(name)
    )

    const naiveClientOnlyComponents = [
      'NDrawer',
      'NDrawerContent',
      'NModal'
    ]

    naiveComponents.forEach((name) => {
      addComponent({
        export: name,
        name,
        filePath: 'naive-ui',
        mode: naiveClientOnlyComponents.includes(name) ? 'client' : 'all'
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
      'useModal'
    ]

    naiveComposables.forEach((name) => {
      addImports({
        name,
        as: name,
        from: 'naive-ui'
      })
    })

    // https://www.naiveui.com/en-US/os-theme/docs/ssr
    if (process.env.NODE_ENV === 'development') {
      nuxt.options.build.transpile.push('@juggle/resize-observer')
      extendViteConfig((config) => {
        config.optimizeDeps ||= {}
        config.optimizeDeps.include ||= []
        config.optimizeDeps.include.push('naive-ui')
      })
    } else {
      nuxt.options.build.transpile.push(
        'naive-ui',
        'vueuc',
        '@css-render/vue3-ssr',
        '@juggle/resize-observer',
        '@iconify/vue'
      )
    }

    // https://github.com/becem-gharbi/iconify-offline-nuxt
    if (options?.iconDownload) {
      extendViteConfig((config) => {
        config.plugins ||= []
        const iconsDir = path.resolve(nuxt.options.srcDir, 'public/iconify')
        config.plugins.push(iconifyVitePlugin(iconsDir, options.iconCollectionsUrl))
      })
    }

    if (options.spaLoadingTemplate && typeof nuxt.options.spaLoadingTemplate !== 'string') {
      nuxt.options.spaLoadingTemplate = resolve(runtimeDir, `templates/${options.spaLoadingTemplate.name}.html`)
    }

    addTypeTemplate({
      filename: 'types/naiveui.d.ts',
      getContents: () => `
      import {RouteLocationRaw} from '#vue-router'
      export interface MenuLinkRoute {
        label: string;
        icon?: string;
        to?: RouteLocationRaw;
        /** @deprecated since version 1.11.0, instead use 'to' */
        path?: RouteLocationRaw;
        children?: MenuLinkRoute[];
      }
      export interface TabbarRoute {
        label: string;
        iconSelected: string;
        iconUnselected: string;
        to: RouteLocationRaw;
        /** @deprecated since version 1.13.1, instead use 'to' */
        path?: RouteLocationRaw;
      }`
    })
  }
})
