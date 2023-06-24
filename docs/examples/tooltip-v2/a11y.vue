<template>
  <eh-tooltip-v2 :aria-label="title">
    <template #trigger>
      <eh-button><eh-icon>
          <Delete />
        </eh-icon></eh-button>
    </template>
    {{ content }}
  </eh-tooltip-v2>
</template>

<script setup lang="ts">
import { Delete } from '@ehop/icons-vue'
const content = 'Delete'
const title = 'Delete item'
</script>
