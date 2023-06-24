<template>
  <eh-popconfirm width="220" confirm-button-text="OK" cancel-button-text="No, Thanks" :icon="InfoFilled"
    icon-color="#626AEF" title="Are you sure to delete this?">
    <template #reference>
      <eh-button>Delete</eh-button>
    </template>
  </eh-popconfirm>
</template>

<script setup lang="ts">
import { InfoFilled } from '@ehop/icons-vue'
</script>
