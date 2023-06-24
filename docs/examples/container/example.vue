<template>
  <eh-container class="layout-container-demo" style="height: 500px">
    <eh-aside width="200px">
      <eh-scrollbar>
        <eh-menu :default-openeds="['1', '3']">
          <eh-sub-menu index="1">
            <template #title>
              <eh-icon>
                <message />
              </eh-icon>Navigator One
            </template>
            <eh-menu-item-group>
              <template #title>Group 1</template>
              <eh-menu-item index="1-1">Option 1</eh-menu-item>
              <eh-menu-item index="1-2">Option 2</eh-menu-item>
            </eh-menu-item-group>
            <eh-menu-item-group title="Group 2">
              <eh-menu-item index="1-3">Option 3</eh-menu-item>
            </eh-menu-item-group>
            <eh-sub-menu index="1-4">
              <template #title>Option4</template>
              <eh-menu-item index="1-4-1">Option 4-1</eh-menu-item>
            </eh-sub-menu>
          </eh-sub-menu>
          <eh-sub-menu index="2">
            <template #title>
              <eh-icon><icon-menu /></eh-icon>Navigator Two
            </template>
            <eh-menu-item-group>
              <template #title>Group 1</template>
              <eh-menu-item index="2-1">Option 1</eh-menu-item>
              <eh-menu-item index="2-2">Option 2</eh-menu-item>
            </eh-menu-item-group>
            <eh-menu-item-group title="Group 2">
              <eh-menu-item index="2-3">Option 3</eh-menu-item>
            </eh-menu-item-group>
            <eh-sub-menu index="2-4">
              <template #title>Option 4</template>
              <eh-menu-item index="2-4-1">Option 4-1</eh-menu-item>
            </eh-sub-menu>
          </eh-sub-menu>
          <eh-sub-menu index="3">
            <template #title>
              <eh-icon>
                <setting />
              </eh-icon>Navigator Three
            </template>
            <eh-menu-item-group>
              <template #title>Group 1</template>
              <eh-menu-item index="3-1">Option 1</eh-menu-item>
              <eh-menu-item index="3-2">Option 2</eh-menu-item>
            </eh-menu-item-group>
            <eh-menu-item-group title="Group 2">
              <eh-menu-item index="3-3">Option 3</eh-menu-item>
            </eh-menu-item-group>
            <eh-sub-menu index="3-4">
              <template #title>Option 4</template>
              <eh-menu-item index="3-4-1">Option 4-1</eh-menu-item>
            </eh-sub-menu>
          </eh-sub-menu>
        </eh-menu>
      </eh-scrollbar>
    </eh-aside>

    <eh-container>
      <eh-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <eh-dropdown>
            <eh-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </eh-icon>
            <template #dropdown>
              <eh-dropdown-menu>
                <eh-dropdown-item>View</eh-dropdown-item>
                <eh-dropdown-item>Add</eh-dropdown-item>
                <eh-dropdown-item>Delete</eh-dropdown-item>
              </eh-dropdown-menu>
            </template>
          </eh-dropdown>
          <span>Tom</span>
        </div>
      </eh-header>

      <eh-main>
        <eh-scrollbar>
          <eh-table :data="tableData">
            <eh-table-column prop="date" label="Date" width="140" />
            <eh-table-column prop="name" label="Name" width="120" />
            <eh-table-column prop="address" label="Address" />
          </eh-table>
        </eh-scrollbar>
      </eh-main>
    </eh-container>
  </eh-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@ehop/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--eh-color-primary-light-7);
  color: var(--eh-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--eh-text-color-primary);
  background: var(--eh-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}</style>
