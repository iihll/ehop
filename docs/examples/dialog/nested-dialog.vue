<template>
  <eh-button text @click="outerVisible = true">
    open the outer Dialog
  </eh-button>

  <eh-dialog v-model="outerVisible" title="Outer Dialog">
    <template #default>
      <eh-dialog v-model="innerVisible" width="30%" title="Inner Dialog" append-to-body />
    </template>
    <template #footer>
      <div class="dialog-footer">
        <eh-button @click="outerVisible = false">Cancel</eh-button>
        <eh-button type="primary" @click="innerVisible = true">
          open the inner Dialog
        </eh-button>
      </div>
    </template>
  </eh-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
