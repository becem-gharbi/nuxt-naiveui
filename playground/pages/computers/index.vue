<template>
  <div>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button> Duck </n-button>
      </template>
      If it looks like a duck, walks like a duck, and quacks like a duck...it must
      be a duck.
    </n-tooltip>

    <n-tabs type="segment" animated>
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="Jay Chou">
        Qilixiang
      </n-tab-pane>
    </n-tabs>

    <n-space vertical :size="12">
      <n-alert title="Default Text" type="default">
        Gee it's good to be back home
      </n-alert>
      <n-alert title="Info Text" type="info">
        Gee it's good to be back home
      </n-alert>
      <n-alert title="Success Text" type="success">
        Leave it till tomorrow to unpack my case
      </n-alert>
      <n-alert title="Warning Text" type="warning">
        Honey disconnect the phone
      </n-alert>
      <n-alert title="Error Text" type="error">
        I'm back in the U.S.S.R.
      </n-alert>
    </n-space>
  </div>
</template>
