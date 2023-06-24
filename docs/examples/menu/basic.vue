<template>
  <eh-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
    <eh-menu-item index="3" disabled>Info</eh-menu-item>
    <eh-menu-item index="4">Orders</eh-menu-item>
  </eh-menu>
  <div class="h-6" />
  <eh-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
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
    <eh-menu-item index="3" disabled>Info</eh-menu-item>
    <eh-menu-item index="4">Orders</eh-menu-item>
  </eh-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
