<template>
  <div>
    <eh-config-provider :message="config">
      <eh-button @click="open">OPEN</eh-button>
    </eh-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'ehop'
const config = reactive({
  max: 3,
})
const open = () => {
  ElMessage('This is a message.')
}
</script>
