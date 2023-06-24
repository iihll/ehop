<template>
  <div style="font-size: 14px">
    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>
  </div>
  <div style="margin: 15px">
    <eh-button @click="showClick">show</eh-button>
  </div>
  <eh-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
    <span class="el-dropdown-link"> Dropdown List1 </span>
    <template #dropdown>
      <eh-dropdown-menu>
        <eh-dropdown-item>Action 1</eh-dropdown-item>
        <eh-dropdown-item>Action 2</eh-dropdown-item>
        <eh-dropdown-item>Action 3</eh-dropdown-item>
        <eh-dropdown-item disabled>Action 4</eh-dropdown-item>
        <eh-dropdown-item divided>Action 5</eh-dropdown-item>
      </eh-dropdown-menu>
    </template>
  </eh-dropdown>

  <eh-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <span class="el-dropdown-link"> Dropdown List2 </span>
    <template #dropdown>
      <eh-dropdown-menu>
        <eh-dropdown-item>Action 1</eh-dropdown-item>
        <eh-dropdown-item>Action 2</eh-dropdown-item>
        <eh-dropdown-item>Action 3</eh-dropdown-item>
        <eh-dropdown-item disabled>Action 4</eh-dropdown-item>
        <eh-dropdown-item divided>Action 5</eh-dropdown-item>
      </eh-dropdown-menu>
    </template>
  </eh-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownInstance } from 'ehop'

const dropdown1 = ref<DropdownInstance>()
function handleVisible2(visible: any) {
  if (!dropdown1.value) return
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
}
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--eh-color-primary);
  display: flex;
  align-items: center;
}
</style>
