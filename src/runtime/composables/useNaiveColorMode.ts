import { setResponseHeader, getCookie, setCookie } from 'h3'
import Cookies from 'js-cookie'
import type {
  ColorMode,
  ColorModePreference,
  ColorModeForce,
  PublicConfig
} from '../types'
import type { Ref } from '#imports'
import {
  useState,
  useRuntimeConfig,
  useRequestEvent,
  useRequestHeaders
} from '#imports'

export function useNaiveColorMode () {
  const event = useRequestEvent()
  const config = useRuntimeConfig().public.naiveui as PublicConfig
  const colorMode: Ref<ColorMode> = useState<ColorMode>('naive-color-mode')
  const colorModeForced: Ref<ColorModeForce> = useState<ColorModeForce>('naive-color-mode-forced')

  const colorModePreferenceCookie = {
    get value () {
      const v = import.meta.client
        ? Cookies.get(config.colorModePreferenceCookieName)
        : getCookie(event!, config.colorModePreferenceCookieName)
      return v ?? ''
    },
    set value (newValue) {
      if (import.meta.client) {
        Cookies.set(config.colorModePreferenceCookieName, newValue, {
          expires: 356,
          secure: true,
          sameSite: 'lax'
        })
      } else {
        setCookie(event!, config.colorModePreferenceCookieName, newValue, {
          maxAge: 30758400, // 1 year
          secure: true,
          sameSite: 'lax'
        })
      }
    }
  }

  const colorModePreferenceState = useState<ColorModePreference>('naive-color-mode-preference')

  const colorModePreference = {
    get: () => colorModePreferenceState.value,
    set (value: ColorModePreference) {
      colorModePreferenceState.value = value

      // No need to create cookie if preference is the default
      if (colorModePreferenceCookie.value || value !== config.colorModePreference) {
        colorModePreferenceCookie.value = value
      }

      if (colorModeForced.value) {
        colorMode.value = colorModeForced.value
      } else {
        colorMode.value = value === 'system' ? detectPreferedColorMode() : value
      }
    },
    sync () {
      this.set(colorModePreferenceCookie.value as ColorModePreference || config.colorModePreference)
    }
  }

  function detectPreferedColorMode () {
    if (import.meta.server) {
      setResponseHeader(event!, 'Accept-CH', 'Sec-CH-Prefers-Color-Scheme')
      setResponseHeader(event!, 'Vary', 'Sec-CH-Prefers-Color-Scheme')
      setResponseHeader(event!, 'Critical-CH', 'Sec-CH-Prefers-Color-Scheme')

      const headers = useRequestHeaders()
      return headers['sec-ch-prefers-color-scheme'] === 'dark'
        ? 'dark'
        : 'light'
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
  }
  return { colorMode, colorModePreference, colorModeForced }
}
