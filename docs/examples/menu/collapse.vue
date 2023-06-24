<template>
  <eh-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <eh-radio-button :label="false">expand</eh-radio-button>
    <eh-radio-button :label="true">collapse</eh-radio-button>
  </eh-radio-group>
  <eh-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">
    <eh-sub-menu index="1">
      <template #title>
        <eh-icon>
          <location />
        </eh-icon>
        <span>Navigator One</span>
      </template>
      <eh-menu-item-group>
        <template #title><span>Group One</span></template>
        <eh-menu-item index="1-1">item one</eh-menu-item>
        <eh-menu-item index="1-2">item two</eh-menu-item>
      </eh-menu-item-group>
      <eh-menu-item-group title="Group Two">
        <eh-menu-item index="1-3">item three</eh-menu-item>
      </eh-menu-item-group>
      <eh-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <eh-menu-item index="1-4-1">item one</eh-menu-item>
      </eh-sub-menu>
    </eh-sub-menu>
    <eh-menu-item index="2">
      <eh-icon><icon-menu /></eh-icon>
      <template #title>Navigator Two</template>
    </eh-menu-item>
    <eh-menu-item index="3" disabled>
      <eh-icon>
        <document />
      </eh-icon>
      <template #title>Navigator Three</template>
    </eh-menu-item>
    <eh-menu-item index="4">
      <eh-icon>
        <setting />
      </eh-icon>
      <template #title>Navigator Four</template>
    </eh-menu-item>
  </eh-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@ehop/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
