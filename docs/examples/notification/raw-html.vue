<template>
  <eh-button plain @click="open"> Use HTML String </eh-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'ehop'

const open = () => {
  ElNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
