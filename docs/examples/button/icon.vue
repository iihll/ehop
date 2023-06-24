<template>
  <div class="flex">
    <eh-button type="primary" :icon="Edit" />
    <eh-button type="primary" :icon="Share" />
    <eh-button type="primary" :icon="Delete" />
    <eh-button type="primary" :icon="Search">Search</eh-button>
    <eh-button type="primary">
      Upload<eh-icon class="el-icon--right">
        <Upload />
      </eh-icon>
    </eh-button>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@ehop/icons-vue'
</script>
