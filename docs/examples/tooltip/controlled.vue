<template>
  <eh-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <eh-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </eh-button>
  </eh-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
