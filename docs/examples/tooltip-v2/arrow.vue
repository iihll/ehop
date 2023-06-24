<template>
  <eh-tooltip-v2 aria-label="content" show-arrow always-on placement="top">
    <template #trigger>
      <eh-button circle><eh-icon>
          <Plus />
        </eh-icon></eh-button>
    </template>
    Basic tooltip
  </eh-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@ehop/icons-vue'
</script>
