<template>
  <eh-button text @click="dialogVisible = true">
    click to open the Dialog
  </eh-button>

  <div>
    <p>Close dialog and the input will be focused</p>
    <eh-input ref="inputRef" placeholder="Please input" />
  </div>

  <eh-dialog v-model="dialogVisible" destroy-on-close title="Tips" width="30%" @close-auto-focus="handleCloseAutoFocus">
    <span>This is a message</span>
    <eh-divider />
    <eh-input placeholder="Initially focused" />
    <template #footer>
      <span class="dialog-footer">
        <eh-button @click="dialogVisible = false">Cancel</eh-button>
        <eh-button type="primary" @click="dialogVisible = false">
          Confirm
        </eh-button>
      </span>
    </template>
  </eh-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElInput } from 'ehop'

const dialogVisible = ref(false)
const inputRef = ref<InstanceType<typeof ElInput>>()

const handleCloseAutoFocus = () => {
  inputRef.value?.focus()
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
