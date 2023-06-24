<template>
  <eh-row class="block-col-2">
    <eh-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <eh-dropdown>
        <span class="el-dropdown-link">
          Dropdown List<eh-icon class="el-icon--right"><arrow-down /></eh-icon>
        </span>
        <template #dropdown>
          <eh-dropdown-menu>
            <eh-dropdown-item :icon="Plus">Action 1</eh-dropdown-item>
            <eh-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </eh-dropdown-item>
            <eh-dropdown-item :icon="CirclePlus">Action 3</eh-dropdown-item>
            <eh-dropdown-item :icon="Check">Action 4</eh-dropdown-item>
            <eh-dropdown-item :icon="CircleCheck">Action 5</eh-dropdown-item>
          </eh-dropdown-menu>
        </template>
      </eh-dropdown>
    </eh-col>
    <eh-col :span="8">
      <span class="demonstration">click to trigger</span>
      <eh-dropdown trigger="click">
        <span class="el-dropdown-link">
          Dropdown List<eh-icon class="el-icon--right"><arrow-down /></eh-icon>
        </span>
        <template #dropdown>
          <eh-dropdown-menu>
            <eh-dropdown-item :icon="Plus">Action 1</eh-dropdown-item>
            <eh-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </eh-dropdown-item>
            <eh-dropdown-item :icon="CirclePlus">Action 3</eh-dropdown-item>
            <eh-dropdown-item :icon="Check">Action 4</eh-dropdown-item>
            <eh-dropdown-item :icon="CircleCheck">Action 5</eh-dropdown-item>
          </eh-dropdown-menu>
        </template>
      </eh-dropdown>
    </eh-col>
    <eh-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <eh-dropdown trigger="contextmenu">
        <span class="el-dropdown-link">
          Dropdown List<eh-icon class="el-icon--right"><arrow-down /></eh-icon>
        </span>
        <template #dropdown>
          <eh-dropdown-menu>
            <eh-dropdown-item :icon="Plus">Action 1</eh-dropdown-item>
            <eh-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </eh-dropdown-item>
            <eh-dropdown-item :icon="CirclePlus">Action 3</eh-dropdown-item>
            <eh-dropdown-item :icon="Check">Action 4</eh-dropdown-item>
            <eh-dropdown-item :icon="CircleCheck">Action 5</eh-dropdown-item>
          </eh-dropdown-menu>
        </template>
      </eh-dropdown>
    </eh-col>
  </eh-row>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@ehop/icons-vue'
</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--eh-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
