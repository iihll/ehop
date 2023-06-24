<template>
  <eh-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      Dropdown List<eh-icon class="el-icon--right"><arrow-down /></eh-icon>
    </span>
    <template #dropdown>
      <eh-dropdown-menu>
        <eh-dropdown-item command="a">Action 1</eh-dropdown-item>
        <eh-dropdown-item command="b">Action 2</eh-dropdown-item>
        <eh-dropdown-item command="c">Action 3</eh-dropdown-item>
        <eh-dropdown-item command="d" disabled>Action 4</eh-dropdown-item>
        <eh-dropdown-item command="e" divided>Action 5</eh-dropdown-item>
      </eh-dropdown-menu>
    </template>
  </eh-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage } from 'ehop'
import { ArrowDown } from '@ehop/icons-vue'

const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
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
