<template>
  <el-button text @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { ElMessageBox } from 'ehop'
import { Delete } from '@ehop/icons-vue'

const open = () => {
  ElMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      type: 'warning',
      icon: markRaw(Delete),
    }
  )
}
</script>
