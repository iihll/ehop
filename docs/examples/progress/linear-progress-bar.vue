<template>
  <div class="demo-progress">
    <eh-progress :percentage="50" />
    <eh-progress :percentage="100" :format="format" />
    <eh-progress :percentage="100" status="success" />
    <eh-progress :percentage="100" status="warning" />
    <eh-progress :percentage="50" status="exception" />
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
