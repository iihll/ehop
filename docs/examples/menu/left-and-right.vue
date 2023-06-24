<template>
  <eh-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <eh-menu-item index="0">LOGO</eh-menu-item>
    <div class="flex-grow" />
    <eh-menu-item index="1">Processing Center</eh-menu-item>
    <eh-sub-menu index="2">
      <template #title>Workspace</template>
      <eh-menu-item index="2-1">item one</eh-menu-item>
      <eh-menu-item index="2-2">item two</eh-menu-item>
      <eh-menu-item index="2-3">item three</eh-menu-item>
      <eh-sub-menu index="2-4">
        <template #title>item four</template>
        <eh-menu-item index="2-4-1">item one</eh-menu-item>
        <eh-menu-item index="2-4-2">item two</eh-menu-item>
        <eh-menu-item index="2-4-3">item three</eh-menu-item>
      </eh-sub-menu>
    </eh-sub-menu>
  </eh-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
