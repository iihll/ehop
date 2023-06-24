<template>
  <eh-dropdown>
    <span class="el-dropdown-link" style="
        cursor: pointer;
        color: var(--eh-color-primary);
        display: flex;
        align-items: center;
      ">
      Dropdown List
      <eh-icon class="el-icon--right">
        <arrow-down />
      </eh-icon>
    </span>
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

<script lang="ts" setup>
import { ArrowDown } from '@ehop/icons-vue'
</script>
