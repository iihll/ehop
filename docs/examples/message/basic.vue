<template>
  <eh-button :plain="true" @click="open">Show message</eh-button>
  <eh-button :plain="true" @click="openVn">VNode</eh-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessage } from 'ehop'

const open = () => {
  ElMessage('this is a message.')
}

const openVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
