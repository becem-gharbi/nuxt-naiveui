<template>
  <div>
    <n-h1>Books</n-h1>

    <lazy-n-dialog
      title="Dialog"
      content="Are you sure?"
    />

    <n-button @click="showModal = true">
      Start Me up
    </n-button>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        title="Modal"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <template #header-extra>
          Oops!
        </template>
        Content
        <template #footer>
          Footer
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup>
import { definePageMeta, ref, useAsyncData } from '#imports'

definePageMeta({
  colorMode: 'light'
})

const showModal = ref(false)

await useAsyncData(() => new Promise((resolve) => {
  setTimeout(resolve, 2000)
}))
</script>
