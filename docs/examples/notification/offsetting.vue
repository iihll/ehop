<template>
  <eh-button plain @click="open"> Notification with offset </eh-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'ehop'

const open = () => {
  ElNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
