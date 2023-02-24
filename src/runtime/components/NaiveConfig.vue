<template>
    <n-config-provider :theme-overrides="themeOverrides" :inline-theme-disabled="true">
        <slot></slot>
    </n-config-provider>
</template>

<script setup lang="ts">
//@ts-ignore
import { useHead, computed, useRuntimeConfig } from "#imports"
import { NConfigProvider, GlobalThemeOverrides, ConfigProviderProps } from "naive-ui"
import useNaiveColorMode from "../composables/useNaiveColorMode"
import useNaiveDevice from "../composables/useNaiveDevice"
import type { ThemeConfig } from "../types"
import { defu } from "defu"

const defaultDarkTheme: GlobalThemeOverrides = {
    common: {
        baseColor: "#000",
        primaryColor: "#63e2b7",
        primaryColorHover: "#7fe7c4",
        primaryColorPressed: "#5acea7",
        primaryColorSuppl: "rgb(42, 148, 125)",
        infoColor: "#70c0e8",
        infoColorHover: "#8acbec",
        infoColorPressed: "#66afd3",
        infoColorSuppl: "rgb(56, 137, 197)",
        successColor: "#63e2b7",
        successColorHover: "#7fe7c4",
        successColorPressed: "#5acea7",
        successColorSuppl: "rgb(42, 148, 125)",
        warningColor: "#f2c97d",
        warningColorHover: "#f5d599",
        warningColorPressed: "#e6c260",
        warningColorSuppl: "rgb(240, 138, 0)",
        errorColor: "#e88080",
        errorColorHover: "#e98b8b",
        errorColorPressed: "#e57272",
        errorColorSuppl: "rgb(208, 58, 82)",
        textColorBase: "#fff",
        textColor1: "rgba(255, 255, 255, 0.9)",
        textColor2: "rgba(255, 255, 255, 0.82)",
        textColor3: "rgba(255, 255, 255, 0.52)",
        textColorDisabled: "rgba(255, 255, 255, 0.38)",
        placeholderColor: "rgba(255, 255, 255, 0.38)",
        placeholderColorDisabled: "rgba(255, 255, 255, 0.28)",
        iconColor: "white",//"rgba(255, 255, 255, 0.38)",
        iconColorDisabled: "rgba(255, 255, 255, 0.28)",
        iconColorHover: "rgba(255, 255, 255, 0.475)",
        iconColorPressed: "rgba(255, 255, 255, 0.30400000000000005)",
        opacity1: "0.9",
        opacity2: "0.82",
        opacity3: "0.52",
        opacity4: "0.38",
        opacity5: "0.28",
        dividerColor: "rgba(255, 255, 255, 0.09)",
        borderColor: "rgba(255, 255, 255, 0.24)",
        closeIconColorHover: "rgba(255, 255, 255, 0.52)",
        closeIconColor: "rgba(255, 255, 255, 0.52)",
        closeIconColorPressed: "rgba(255, 255, 255, 0.52)",
        closeColorHover: "rgba(255, 255, 255, .12)",
        closeColorPressed: "rgba(255, 255, 255, .08)",
        clearColor: "rgba(255, 255, 255, 0.38)",
        clearColorHover: "rgba(255, 255, 255, 0.48)",
        clearColorPressed: "rgba(255, 255, 255, 0.3)",
        scrollbarColor: "rgba(255, 255, 255, 0.2)",
        scrollbarColorHover: "rgba(255, 255, 255, 0.3)",
        progressRailColor: "rgba(255, 255, 255, 0.12)",
        railColor: "rgba(255, 255, 255, 0.2)",
        popoverColor: "rgb(72, 72, 78)",
        tableColor: "rgb(24, 24, 28)",
        cardColor: "rgb(24, 24, 28)",
        modalColor: "rgb(44, 44, 50)",
        bodyColor: "rgb(16, 16, 20)",
        tagColor: "rgba(51, 51, 51, 1)",
        avatarColor: "rgba(255, 255, 255, 0.18)",
        invertedColor: "#000",
        inputColor: "rgba(255, 255, 255, 0.1)",
        codeColor: "rgba(255, 255, 255, 0.12)",
        tabColor: "rgba(255, 255, 255, 0.04)",
        actionColor: "rgba(255, 255, 255, 0.06)",
        tableHeaderColor: "rgba(255, 255, 255, 0.06)",
        hoverColor: "rgba(255, 255, 255, 0.09)",
        tableColorHover: "rgba(255, 255, 255, 0.06)",
        tableColorStriped: "rgba(255, 255, 255, 0.05)",
        pressedColor: "rgba(255, 255, 255, 0.05)",
        opacityDisabled: "0.38",
        inputColorDisabled: "rgba(255, 255, 255, 0.06)",
        buttonColor2: "rgba(255, 255, 255, .08)",
        buttonColor2Hover: "rgba(255, 255, 255, .12)",
        buttonColor2Pressed: "rgba(255, 255, 255, .08)",
        boxShadow1:
            "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
        boxShadow2:
            "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
        boxShadow3:
            "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)",
    },

    Skeleton: {
        color: "#FFFFFF1F",
        colorEnd: "#FFFFFF2E",
    },

    Tag: {
        colorBordered: "#00000000",
    },

    IconWrapper: {
        color: "transparent",
        iconColor: "inherited"
    },
};

const defaultLightTheme: GlobalThemeOverrides = {
    common: {
        bodyColor: "white",
        textColor1: "#171717",
        textColor2: "#262626",
        textColor3: "#a3a3a3",
    },
    IconWrapper: {
        color: "transparent",
        iconColor: "inherited"
    },
    Menu: {
        itemIconColor: "#262626",
        itemTextColor: "#262626",

        itemTextColorHorizontal: "#262626",
        itemIconColorHorizontal: "#262626",

        itemIconColorHoverHorizontalInverted: "#262626",
        itemTextColorHoverHorizontalInverted: "#262626",

        itemTextColorActiveHorizontalInverted: "#262626",
        itemIconColorActiveHorizontalInverted: "#262626",

        itemTextColorActiveHoverHorizontalInverted: "#262626",
        itemIconColorActiveHoverHorizontalInverted: "#262626",

        itemTextColorInverted: "#a3a3a3",
        itemIconColorInverted: "#a3a3a3",

        itemTextColorHoverInverted: "#a3a3a3",
        itemIconColorHoverInverted: "#a3a3a3",

        itemTextColorChildActiveHorizontalInverted: "#262626",
        itemIconColorChildActiveHorizontalInverted: "#262626",

        itemIconColorChildActiveHoverHorizontalInverted: "#262626",
        itemTextColorChildActiveHoverHorizontalInverted: "#262626",

        itemTextColorChildActiveHoverInverted: "#262626",
        itemTextColorChildActiveInverted: "#262626",
        itemIconColorChildActiveHoverInverted: "#262626",
        itemIconColorChildActiveInverted: "#262626",
    }
}

const defaultMobileOrTabletTheme: GlobalThemeOverrides = {
    common: {
        fontSize: "15px",
        heightMedium: "40px",
        fontSizeMedium: "15px"
    },
    Form: {
        labelFontSizeTopMedium: "15px"
    },
    Input: {
        heightMedium: "40px",
        fontSizeMedium: "15px",
    },
    Button: {
        heightMedium: "40px",
        fontSizeMedium: "15px"
    },
    Card: {
        fontSizeMedium: "15px"
    },
    Avatar: {
        heightMedium: "40px",
        fontSize: "15px"
    },
    ColorPicker: {
        heightMedium: "40px",
        fontSizeMedium: "15px"
    },
    Dropdown: {
        optionHeightMedium: "40px",
        fontSizeMedium: "15px"
    },
    Radio: {
        buttonHeightMedium: "40px",
        fontSizeMedium: "15px"
    },
    Skeleton: {
        heightMedium: "40px",
    },
    Tag: {
        heightMedium: "34px",
        fontSizeMedium: "15px"
    },
    Result: {
        fontSizeMedium: "15px",
    }
}

interface NaiveConfigProps
    extends Omit<ConfigProviderProps, "themeOverrides" | "theme"> {
    themeConfig?: ThemeConfig;
}
const config = useRuntimeConfig().public.naiveui

const props = defineProps<NaiveConfigProps>()

const { colorMode } = useNaiveColorMode()
const { isMobileOrTablet } = useNaiveDevice()

const themeOverrides = computed<GlobalThemeOverrides>(() => {
    const themeConfig = props.themeConfig || config.defaultThemeConfig

    const darkTheme: GlobalThemeOverrides = defu(
        themeConfig?.dark,
        defaultDarkTheme
    );

    const lightTheme: GlobalThemeOverrides = defu(
        themeConfig?.light,
        defaultLightTheme
    );

    const colorModeTheme: GlobalThemeOverrides =
        colorMode.value === "dark" ? darkTheme : lightTheme

    const mobileOrTabletTheme = defu(themeConfig?.mobileOrTablet, defaultMobileOrTabletTheme)

    const deviceTheme: GlobalThemeOverrides | undefined = isMobileOrTablet
        ? mobileOrTabletTheme
        : {};

    return defu(
        themeConfig?.shared,
        deviceTheme,
        colorModeTheme
    );
})

useHead(() => ({
    style: [
        {
            children: `body {
           background-color: ${themeOverrides.value?.common?.bodyColor} !important;
           font-family: ${themeOverrides.value?.common?.fontFamily} !important;
           font-size: ${themeOverrides.value?.common?.fontSize} !important;
           line-height: ${themeOverrides.value?.common?.lineHeight} !important;
        `,
        },
    ],
}));
</script>