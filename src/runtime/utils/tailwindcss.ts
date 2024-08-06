import type { Theme } from '../types'

// Reference: https://tailwindcss.com/docs/customizing-colors

// 300, 400, 500, 600, 700
const COLORS = {
  red: ['#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c'],
  green: ['#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d'],
  blue: ['#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8'],
  yellow: ['#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207'],
  violet: ['#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9'],
  orange: ['#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c'],
  amber: ['#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309'],
  teal: ['#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e'],
  purple: ['#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce'],
  rose: ['#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c'],
  sky: ['#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1'],
  cyan: ['#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490'],
  indigo: ['#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca'],
}

// 900, 800, 700, 600
const NEUTRALS = {
  slate: ['#0f172a', '#1e293b', '#334155', '#475569'],
  cool: ['#111827', '#1f2937', '#374151', '#4b5563'],
  zinc: ['#18181b', '#27272a', '#3f3f46', '#52525b'],
  neutral: ['#171717', '#262626', '#404040', '#525252'],
  stone: ['#1c1917', '#292524', '#44403c', '#57534e'],
}

type Color = keyof typeof COLORS
type Neutral = keyof typeof NEUTRALS

interface Colors {
  primary: Color
  success: Color
  warning: Color
  error: Color
  info: Color
  neutral: Neutral
}

export function generateTailwindColorThemes(inputColors?: Partial<Colors>) {
  const colors: Colors = {
    primary: 'blue',
    success: 'green',
    warning: 'amber',
    error: 'red',
    info: 'sky',
    neutral: 'neutral',
    ...inputColors,
  }

  return {
    light: generateColorThemeLight(colors),
    dark: generateColorThemeDark(colors),
  }
}

function generateColorThemeLight(colors: Colors) {
  return {
    defaults: true,

    common: {
      primaryColor: COLORS[colors.primary][2],
      primaryColorHover: COLORS[colors.primary][1],
      primaryColorPressed: COLORS[colors.primary][3],
      primaryColorSuppl: COLORS[colors.primary][4],
      infoColor: COLORS[colors.info][2],
      infoColorHover: COLORS[colors.info][1],
      infoColorPressed: COLORS[colors.info][3],
      infoColorSuppl: COLORS[colors.info][4],
      successColor: COLORS[colors.success][2],
      successColorHover: COLORS[colors.success][1],
      successColorPressed: COLORS[colors.success][3],
      successColorSuppl: COLORS[colors.success][4],
      warningColor: COLORS[colors.warning][2],
      warningColorHover: COLORS[colors.warning][1],
      warningColorPressed: COLORS[colors.warning][3],
      warningColorSuppl: COLORS[colors.warning][4],
      errorColor: COLORS[colors.error][2],
      errorColorHover: COLORS[colors.error][1],
      errorColorPressed: COLORS[colors.error][3],
      errorColorSuppl: COLORS[colors.error][4],
    },
  } as Theme
}

function generateColorThemeDark(colors: Colors) {
  return {
    defaults: true,

    common: {
      primaryColor: COLORS[colors.primary][1],
      primaryColorHover: COLORS[colors.primary][0],
      primaryColorPressed: COLORS[colors.primary][2],
      primaryColorSuppl: COLORS[colors.primary][3],
      infoColor: COLORS[colors.info][1],
      infoColorHover: COLORS[colors.info][0],
      infoColorPressed: COLORS[colors.info][2],
      infoColorSuppl: COLORS[colors.info][3],
      successColor: COLORS[colors.success][1],
      successColorHover: COLORS[colors.success][0],
      successColorPressed: COLORS[colors.success][2],
      successColorSuppl: COLORS[colors.success][3],
      warningColor: COLORS[colors.warning][1],
      warningColorHover: COLORS[colors.warning][0],
      warningColorPressed: COLORS[colors.warning][2],
      warningColorSuppl: COLORS[colors.warning][3],
      errorColor: COLORS[colors.error][1],
      errorColorHover: COLORS[colors.error][0],
      errorColorPressed: COLORS[colors.error][2],
      errorColorSuppl: COLORS[colors.error][3],

      bodyColor: NEUTRALS[colors.neutral][0],

      baseColor: NEUTRALS[colors.neutral][1],
      invertedColor: NEUTRALS[colors.neutral][1],
      tableColor: NEUTRALS[colors.neutral][1],
      cardColor: NEUTRALS[colors.neutral][1],

      tagColor: NEUTRALS[colors.neutral][2],
      modalColor: NEUTRALS[colors.neutral][2],

      popoverColor: NEUTRALS[colors.neutral][3],
    },

    Layout: {
      siderColor: NEUTRALS[colors.neutral][0],
      headerColor: NEUTRALS[colors.neutral][0],
      footerColor: NEUTRALS[colors.neutral][0],
    },

    Tooltip: {
      color: NEUTRALS[colors.neutral][3],
    },

    Slider: {
      indicatorColor: NEUTRALS[colors.neutral][3],
    },
  } as Theme
}
