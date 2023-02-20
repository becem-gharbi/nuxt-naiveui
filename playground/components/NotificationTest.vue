<template>
    <n-button type="error" @click="() => notification.success({ title: 'done' })">Click me</n-button>
</template>
  
  
<script setup lang="ts">
import { useNotification } from 'naive-ui';

const notification = useNotification()
</script>
