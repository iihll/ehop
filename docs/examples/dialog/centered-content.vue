<template>
  <eh-button text @click="centerDialogVisible = true">
    Click to open the Dialog
  </eh-button>

  <eh-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <eh-button @click="centerDialogVisible = false">Cancel</eh-button>
        <eh-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </eh-button>
      </span>
    </template>
  </eh-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
