<template>
  <eh-button-group>
    <eh-button type="primary" :icon="ArrowLeft">Previous Page</eh-button>
    <eh-button type="primary">
      Next Page<eh-icon class="el-icon--right">
        <ArrowRight />
      </eh-icon>
    </eh-button>
  </eh-button-group>

  <eh-button-group class="ml-4">
    <eh-button type="primary" :icon="Edit" />
    <eh-button type="primary" :icon="Share" />
    <eh-button type="primary" :icon="Delete" />
  </eh-button-group>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight, Delete, Edit, Share } from '@ehop/icons-vue'
</script>
