<template>
  <eh-row class="tac">
    <eh-col :span="12">
      <h5 class="mb-2">Default colors</h5>
      <eh-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <eh-sub-menu index="1">
          <template #title>
            <eh-icon>
              <location />
            </eh-icon>
            <span>Navigator One</span>
          </template>
          <eh-menu-item-group title="Group One">
            <eh-menu-item index="1-1">item one</eh-menu-item>
            <eh-menu-item index="1-2">item two</eh-menu-item>
          </eh-menu-item-group>
          <eh-menu-item-group title="Group Two">
            <eh-menu-item index="1-3">item three</eh-menu-item>
          </eh-menu-item-group>
          <eh-sub-menu index="1-4">
            <template #title>item four</template>
            <eh-menu-item index="1-4-1">item one</eh-menu-item>
          </eh-sub-menu>
        </eh-sub-menu>
        <eh-menu-item index="2">
          <eh-icon><icon-menu /></eh-icon>
          <span>Navigator Two</span>
        </eh-menu-item>
        <eh-menu-item index="3" disabled>
          <eh-icon>
            <document />
          </eh-icon>
          <span>Navigator Three</span>
        </eh-menu-item>
        <eh-menu-item index="4">
          <eh-icon>
            <setting />
          </eh-icon>
          <span>Navigator Four</span>
        </eh-menu-item>
      </eh-menu>
    </eh-col>
    <eh-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <eh-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <eh-sub-menu index="1">
          <template #title>
            <eh-icon>
              <location />
            </eh-icon>
            <span>Navigator One</span>
          </template>
          <eh-menu-item-group title="Group One">
            <eh-menu-item index="1-1">item one</eh-menu-item>
            <eh-menu-item index="1-2">item two</eh-menu-item>
          </eh-menu-item-group>
          <eh-menu-item-group title="Group Two">
            <eh-menu-item index="1-3">item three</eh-menu-item>
          </eh-menu-item-group>
          <eh-sub-menu index="1-4">
            <template #title>item four</template>
            <eh-menu-item index="1-4-1">item one</eh-menu-item>
          </eh-sub-menu>
        </eh-sub-menu>
        <eh-menu-item index="2">
          <eh-icon><icon-menu /></eh-icon>
          <span>Navigator Two</span>
        </eh-menu-item>
        <eh-menu-item index="3" disabled>
          <eh-icon>
            <document />
          </eh-icon>
          <span>Navigator Three</span>
        </eh-menu-item>
        <eh-menu-item index="4">
          <eh-icon>
            <setting />
          </eh-icon>
          <span>Navigator Four</span>
        </eh-menu-item>
      </eh-menu>
    </eh-col>
  </eh-row>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@ehop/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
