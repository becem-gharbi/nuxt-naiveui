<template>
    <n-config-provider :theme-overrides="naiveTheme" :inline-theme-disabled="true">
        <slot></slot>
    </n-config-provider>
</template>

<script setup lang="ts">
//@ts-ignore
import { useHead, useRuntimeConfig, onMounted, watchEffect, ref } from "#imports"
import { NConfigProvider, GlobalThemeOverrides, ConfigProviderProps } from "naive-ui"
import useNaiveColorMode from "../composables/useNaiveColorMode"
import useNaiveDevice from "../composables/useNaiveDevice"
import useNaiveTheme from "../composables/useNaiveTheme"
import type { ThemeConfig } from "../types"
import { defu } from "defu"

const defaultDarkTheme: GlobalThemeOverrides = {
    common: {
        lineHeight: "normal",
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
        lineHeight: "normal",
        bodyColor: "white",
        textColorBase: "black",
        textColor1: "#262626",
        textColor2: "#525252",
        textColor3: "#a3a3a3",
    },
    IconWrapper: {
        color: "transparent",
        iconColor: "inherited"
    },
    Menu: {
        itemIconColor: "#525252",
        itemTextColor: "#525252",

        itemTextColorHorizontal: "#525252",
        itemIconColorHorizontal: "#525252",

        itemIconColorHoverHorizontalInverted: "#525252",
        itemTextColorHoverHorizontalInverted: "#525252",

        itemTextColorActiveHorizontalInverted: "#525252",
        itemIconColorActiveHorizontalInverted: "#525252",

        itemTextColorActiveHoverHorizontalInverted: "#525252",
        itemIconColorActiveHoverHorizontalInverted: "#525252",

        itemTextColorInverted: "#a3a3a3",
        itemIconColorInverted: "#a3a3a3",

        itemTextColorHoverInverted: "#a3a3a3",
        itemIconColorHoverInverted: "#a3a3a3",

        itemTextColorChildActiveHorizontalInverted: "#525252",
        itemIconColorChildActiveHorizontalInverted: "#525252",

        itemIconColorChildActiveHoverHorizontalInverted: "#525252",
        itemTextColorChildActiveHoverHorizontalInverted: "#525252",

        itemTextColorChildActiveHoverInverted: "#525252",
        itemTextColorChildActiveInverted: "#525252",
        itemIconColorChildActiveHoverInverted: "#525252",
        itemIconColorChildActiveInverted: "#525252",
    }
}

const defaultMobileOrTabletTheme: GlobalThemeOverrides = {
    common: {
        fontSize: "16px",
        heightMedium: "42px",
        fontSizeMedium: "16px"
    },
    Form: {
        labelFontSizeTopMedium: "16px"
    },
    Input: {
        heightMedium: "42px",
        fontSizeMedium: "16px",
    },
    Button: {
        heightMedium: "42px",
        fontSizeMedium: "16px"
    },
    Card: {
        fontSizeMedium: "16px"
    },
    Avatar: {
        heightMedium: "42px",
        fontSize: "16px"
    },
    ColorPicker: {
        heightMedium: "42px",
        fontSizeMedium: "16px"
    },
    Dropdown: {
        optionHeightMedium: "42px",
        fontSizeMedium: "16px"
    },
    Radio: {
        buttonHeightMedium: "42px",
        fontSizeMedium: "16px"
    },
    Skeleton: {
        heightMedium: "42px",
    },
    Tag: {
        heightMedium: "34px",
        fontSizeMedium: "16px"
    },
    Result: {
        fontSizeMedium: "16px",
    }
}

interface NaiveConfigProps
    extends Omit<ConfigProviderProps, "themeOverrides" | "theme"> {
    themeConfig?: ThemeConfig;
}
const config = useRuntimeConfig().public.naiveui

const props = defineProps<NaiveConfigProps>()

const themeConfig = props.themeConfig || config.themeConfig

const { colorMode } = useNaiveColorMode()

const { isMobileOrTablet, isMobile } = useNaiveDevice()

let deviceTheme: GlobalThemeOverrides | undefined = undefined

if (isMobileOrTablet) {
    deviceTheme = defu(themeConfig?.mobileOrTablet, defaultMobileOrTabletTheme)
}
else if (isMobile) {
    deviceTheme = defu(themeConfig?.mobile, defaultMobileOrTabletTheme)
}

const naiveTheme = useNaiveTheme()

const isMounted = ref(false)

watchEffect(() => {

    let colorModeTheme: GlobalThemeOverrides | undefined = undefined

    if (colorMode.value === "dark") {
        colorModeTheme = defu(themeConfig?.dark, defaultDarkTheme);
    }
    else {
        colorModeTheme = defu(themeConfig?.light, defaultLightTheme);
    }

    naiveTheme.value = defu(
        themeConfig?.shared,
        deviceTheme,
        colorModeTheme,
        { isMounted: isMounted.value }
    );
})

useHead(() => ({
    htmlAttrs: {
        class: colorMode.value === "dark" ? "dark" : "",
    },
    style: [
        {
            children: `
                body {
                    background-color: ${naiveTheme.value?.common?.bodyColor} !important;
                    color: ${naiveTheme.value?.common?.textColorBase} !important;
                    font-family: ${naiveTheme.value?.common?.fontFamily} !important;
                    font-size: ${naiveTheme.value?.common?.fontSize} !important;
                    line-height: ${naiveTheme.value?.common?.lineHeight} !important;
                }\n`
        },
    ],
}));

onMounted(() => {
    isMounted.value = true

    document.querySelectorAll(".n-submenu").forEach(subMenu => {
        subMenu?.firstElementChild?.setAttribute("role", "none")
    })
})

</script>

<style>
.n-button {
    background-color: var(--n-color);
}

@media screen and (min-width : 768px) {
    .mobileOrTablet {
        display: none !important;
    }
}

@media screen and (max-width : 768px) {
    .notMobileOrTablet {
        display: none !important;
    }
}
</style>