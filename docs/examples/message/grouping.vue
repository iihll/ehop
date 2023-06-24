<template>
  <eh-button :plain="true" @click="open">Show message</eh-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'ehop'

const open = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>
