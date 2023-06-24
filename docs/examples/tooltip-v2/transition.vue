<template>
  <!-- eslint-disable vue/require-toggle-inside-transition  -->
  <eh-tooltip-v2 aria-label="content" placement="top" content-class="scale-in">
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
</script>

<style>
@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.el-tooltip-v2__content.scale-in {
  animation: scale-in var(--eh-transition-duration) ease-out forwards;
}
</style>
