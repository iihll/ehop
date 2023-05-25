<script setup lang="ts">
import { Loading } from '@ehop/icons-vue'
</script>

<template>
  <component :is="Loading" class="icon" />
  <hr>
</template>

<style>
.icon {
  height: 48px;
  color: #409eff;
}
</style>
