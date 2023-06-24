<template>
  <eh-tooltip-v2 full-transition :transition-props="transitionProps">
    <template #trigger>
      <eh-button circle><eh-icon>
          <Plus />
        </eh-icon></eh-button>
    </template>
    <div>content</div>
  </eh-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@ehop/icons-vue'

const transitionProps = {
  name: 'el-fade-in-linear',
}
</script>
