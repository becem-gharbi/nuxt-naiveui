<template>
  <NSpace>
    <NButton @click="cb1">
      useMessage
    </NButton>
    <NButton @click="cb2">
      useNotification
    </NButton>
    <NButton @click="cb3">
      useDialog
    </NButton>
    <NButton @click="cb4">
      useLoadingBar
    </NButton>
  </NSpace>
</template>

<script lang="ts" setup>
import {
  useMessage,
  useNotification,
  useDialog,
  useLoadingBar,
  NButton,
  NSpace,
} from 'naive-ui'

const message = useMessage()
const notification = useNotification()
const dialog = useDialog()
const loadingBar = useLoadingBar()

const cb1 = () => {
  message.info('message')
}

const cb2 = () => {
  notification.info({ title: 'notification' })
}

const cb3 = () => {
  dialog.info({ title: 'dialog' })
}

const cb4 = () => {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 1000)
}
</script>
