<template>
  <eh-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <eh-tab-pane label="User" name="first">User</eh-tab-pane>
    <eh-tab-pane label="Config" name="second">Config</eh-tab-pane>
    <eh-tab-pane label="Role" name="third">Role</eh-tab-pane>
    <eh-tab-pane label="Task" name="fourth">Task</eh-tab-pane>
  </eh-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
