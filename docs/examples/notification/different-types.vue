<template>
  <eh-button plain @click="open1"> Success </eh-button>
  <eh-button plain @click="open2"> Warning </eh-button>
  <eh-button plain @click="open3"> Info </eh-button>
  <eh-button plain @click="open4"> Error </eh-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'ehop'

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
