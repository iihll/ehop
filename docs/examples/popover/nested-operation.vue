<template>
  <eh-popover :visible="visible" placement="top" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <eh-button size="small" text @click="visible = false">cancel</eh-button>
      <eh-button size="small" type="primary" @click="visible = false">confirm</eh-button>
    </div>
    <template #reference>
      <eh-button @click="visible = true">Delete</eh-button>
    </template>
  </eh-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
