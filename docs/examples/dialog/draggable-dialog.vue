<template>
  <eh-button text @click="dialogVisible = true">
    Click to open Dialog
  </eh-button>

  <eh-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
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

const dialogVisible = ref(false)
</script>
