<template>
  <eh-button text @click="open">Click to open the Message Box</eh-button>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'ehop'
import type { Action } from 'ehop'

const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
