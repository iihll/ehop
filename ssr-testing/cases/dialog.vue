<template>
  <eh-button type="text" @click="dialogVisible = true">click to open the Dialog</eh-button>

  <eh-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <eh-button style="margin-right: 10px" @click="dialogVisible = false">Cancel</eh-button>
        <eh-button type="primary" @click="dialogVisible = false">Confirm</eh-button>
      </span>
    </template>
  </eh-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>
