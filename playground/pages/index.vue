<template>
    <n-space vertical :style="{ margin: '1em' }" size="large">

        <n-h3>Buttons</n-h3>

        <n-space align="center">
            <n-text>Basic</n-text>
            <n-button>Default</n-button>
            <n-button type="error">Error</n-button>
            <n-button type="info">Info</n-button>
            <n-button type="primary">Primary</n-button>
            <n-button type="success">Success</n-button>
            <n-button type="tertiary">Tertiary</n-button>
            <n-button type="warning">Warning</n-button>
        </n-space>

        <n-space align="center">
            <n-text>Secondary</n-text>
            <n-button secondary>Default</n-button>
            <n-button type="error" secondary>Error</n-button>
            <n-button type="info" secondary>Info</n-button>
            <n-button type="primary" secondary>Primary</n-button>
            <n-button type="success" secondary>Success</n-button>
            <n-button type="tertiary" secondary>Tertiary</n-button>
            <n-button type="warning" secondary>Warning</n-button>
        </n-space>

        <n-space align="center">
            <n-text>Quaternary</n-text>
            <n-button quaternary>Default</n-button>
            <n-button type="error" quaternary>Error</n-button>
            <n-button type="info" quaternary>Info</n-button>
            <n-button type="primary" quaternary>Primary</n-button>
            <n-button type="success" quaternary>Success</n-button>
            <n-button type="tertiary" quaternary>Tertiary</n-button>
            <n-button type="warning" quaternary>Warning</n-button>
        </n-space>

        <n-divider />

        <n-h3>Tags</n-h3>
        <n-space align="center">
            <n-text>Basic</n-text>
            <n-tag>Default</n-tag>
            <n-tag type="success">Success</n-tag>
            <n-tag type="warning">Warning</n-tag>
            <n-tag type="error">Warning</n-tag>
            <n-tag type="info">Info</n-tag>
        </n-space>

        <n-space align="center">
            <n-text>Bordless</n-text>
            <n-tag :bordered="false">Default</n-tag>
            <n-tag type="success" :bordered="false">Success</n-tag>
            <n-tag type="warning" :bordered="false">Warning</n-tag>
            <n-tag type="error" :bordered="false">Warning</n-tag>
            <n-tag type="info" :bordered="false">Info</n-tag>
        </n-space>

        <n-divider />

        <n-h3>Form</n-h3>
        <Form></Form>
    </n-space>
</template>
