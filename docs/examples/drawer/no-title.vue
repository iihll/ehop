<template>
  <eh-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </eh-button>

  <eh-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </eh-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>
