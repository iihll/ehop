<template>
  <div class="flex flex-wrap items-center">
    <eh-dropdown>
      <eh-button type="primary">
        Dropdown List<eh-icon class="el-icon--right"><arrow-down /></eh-icon>
      </eh-button>
      <template #dropdown>
        <eh-dropdown-menu>
          <eh-dropdown-item>Action 1</eh-dropdown-item>
          <eh-dropdown-item>Action 2</eh-dropdown-item>
          <eh-dropdown-item>Action 3</eh-dropdown-item>
          <eh-dropdown-item>Action 4</eh-dropdown-item>
          <eh-dropdown-item>Action 5</eh-dropdown-item>
        </eh-dropdown-menu>
      </template>
    </eh-dropdown>
    <eh-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <eh-dropdown-menu>
          <eh-dropdown-item>Action 1</eh-dropdown-item>
          <eh-dropdown-item>Action 2</eh-dropdown-item>
          <eh-dropdown-item>Action 3</eh-dropdown-item>
          <eh-dropdown-item>Action 4</eh-dropdown-item>
          <eh-dropdown-item>Action 5</eh-dropdown-item>
        </eh-dropdown-menu>
      </template>
    </eh-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@ehop/icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>
<style scoped>
.example-showcase .el-dropdown+.el-dropdown {
  margin-left: 15px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--eh-color-primary);
  display: flex;
  align-items: center;
}
</style>
