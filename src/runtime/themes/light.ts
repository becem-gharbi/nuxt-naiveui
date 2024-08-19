import type { Theme } from '../types'

export default {
  common: {
    lineHeight: 'normal',
    textColorBase: 'black',
    bodyColor: 'white',
    textColor1: '#262626',
    textColor2: '#525252',
    textColor3: '#a3a3a3',
  },
  Menu: {
    itemTextColorHorizontalInverted: '#787878',
    itemIconColorInverted: '#787878',
    itemTextColorInverted: '#787878',

    itemTextColorHoverHorizontalInverted: '#525252',
    itemIconColorHoverHorizontalInverted: '#525252',

    itemTextColorActiveHorizontalInverted: '#525252',
    itemIconColorActiveHorizontalInverted: '#525252',

    itemTextColorActiveHoverHorizontalInverted: '#525252',
    itemIconColorActiveHoverHorizontalInverted: '#525252',

    itemTextColorChildActiveHorizontalInverted: '#525252',
    itemIconColorChildActiveHorizontalInverted: '#525252',

    itemTextColorChildActiveHoverHorizontalInverted: '#525252',
    itemIconColorChildActiveHoverHorizontalInverted: '#525252',

    itemTextColorHoverInverted: '#525252',
    itemIconColorHoverInverted: '#525252',
    arrowColorHoverInverted: '#525252',

    itemTextColorChildActiveInverted: 'var(--n-item-color-active)',
    itemIconColorChildActiveHoverInverted: 'var(--n-item-color-active-hover)',
    itemIconColorChildActiveInverted: 'var(--n-item-color-active)',

    arrowColorChildActiveInverted: 'var(--n-item-color-active)',
    arrowColorChildActiveHoverInverted: 'var(--n-item-color-active-hover)',
    arrowColorActiveInverted: 'var(--n-item-color-active)',
    arrowColorActiveHoverInverted: 'var(--n-item-color-active-hover)',
  },
  Layout: {
    siderColor: 'white',
    headerColor: 'white',
    footerColor: 'white',
  },
  IconWrapper: {
    color: 'transparent',
    iconColor: 'inherit',
  },
  Input: {
    lineHeightTextarea: '1.6',
  },
  LoadingBar: {
    height: '3px',
  },
  Form: {
    feedbackPadding: '8px 0px 10px 0px',
  },
} as Theme
