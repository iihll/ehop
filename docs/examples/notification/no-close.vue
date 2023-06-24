<template>
  <eh-button plain @click="open"> Hide close button </eh-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'ehop'

const open = () => {
  ElNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
