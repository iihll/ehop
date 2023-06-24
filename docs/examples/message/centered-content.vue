<template>
  <eh-button plain @click="openCenter">Centered text</eh-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'ehop'

const openCenter = () => {
  ElMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
