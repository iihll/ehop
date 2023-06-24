<template>
  <div>
    <eh-link :icon="Edit">Edit</eh-link>
    <eh-link>
      Check<eh-icon class="el-icon--right"><icon-view /></eh-icon>
    </eh-link>
  </div>
</template>

<script setup lang="ts">
import { Edit, View as IconView } from '@ehop/icons-vue'
</script>

<style scoped>
.el-link {
  margin-right: 8px;
}
</style>
