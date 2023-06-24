<template>
  <eh-button text @click="open">Click to open Message Box</eh-button>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'ehop'

const open = () => {
  ElMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
