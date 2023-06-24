<template>
  <div class="demo-progress">
    <eh-progress :percentage="50" :indeterminate="true" />
    <eh-progress :percentage="100" :format="format" :indeterminate="true" />
    <eh-progress :percentage="100" status="success" :indeterminate="true" :duration="5" />
    <eh-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" />
    <eh-progress :percentage="50" status="exception" :indeterminate="true" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
