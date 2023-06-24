<template>
  <eh-button text @click="dialogVisible = true">
    click to open the Dialog
  </eh-button>

  <eh-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
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
import { ElMessageBox } from 'ehop'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
