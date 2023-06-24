<template>
  <eh-tabs type="border-card" class="demo-tabs">
    <eh-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <eh-icon>
            <calendar />
          </eh-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </eh-tab-pane>
    <eh-tab-pane label="Config">Config</eh-tab-pane>
    <eh-tab-pane label="Role">Role</eh-tab-pane>
    <eh-tab-pane label="Task">Task</eh-tab-pane>
  </eh-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@ehop/icons-vue'
</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
