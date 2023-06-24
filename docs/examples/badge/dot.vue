<template>
  <eh-badge is-dot class="item">query</eh-badge>
  <eh-badge is-dot class="item">
    <eh-button class="share-button" :icon="Share" type="primary" />
  </eh-badge>
</template>

<script lang="ts" setup>
import { Share } from '@ehop/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
