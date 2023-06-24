<template>
  <eh-button text @click="centerDialogVisible = true">
    Click to open Dialog
  </eh-button>

  <eh-dialog v-model="centerDialogVisible" title="Notice" width="30%" destroy-on-close center>
    <span>
      Notice: before dialog gets opened for the first time this node and the one
      bellow will not be rendered
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
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
