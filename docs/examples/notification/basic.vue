<template>
  <eh-button plain @click="open1"> Closes automatically </eh-button>
  <eh-button plain @click="open2"> Won't close automatically </eh-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElNotification } from 'ehop'

const open1 = () => {
  ElNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  ElNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
