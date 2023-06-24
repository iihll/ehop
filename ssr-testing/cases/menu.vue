<template>
  <eh-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <eh-menu-item index="1">Processing Center</eh-menu-item>
    <eh-sub-menu index="2">
      <template #title>Workspace</template>
      <eh-menu-item index="2-1">item one</eh-menu-item>
    </eh-sub-menu>
    <eh-menu-item index="3" disabled>Info</eh-menu-item>
    <eh-menu-item index="4">Orders</eh-menu-item>
  </eh-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
</script>
