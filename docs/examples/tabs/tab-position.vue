<template>
  <eh-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <eh-radio-button label="top">top</eh-radio-button>
    <eh-radio-button label="right">right</eh-radio-button>
    <eh-radio-button label="bottom">bottom</eh-radio-button>
    <eh-radio-button label="left">left</eh-radio-button>
  </eh-radio-group>

  <eh-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <eh-tab-pane label="User">User</eh-tab-pane>
    <eh-tab-pane label="Config">Config</eh-tab-pane>
    <eh-tab-pane label="Role">Role</eh-tab-pane>
    <eh-tab-pane label="Task">Task</eh-tab-pane>
  </eh-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
