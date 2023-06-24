<template>
  <div class="demo-progress">
    <eh-progress type="circle" :percentage="0" />
    <eh-progress type="circle" :percentage="25" />
    <eh-progress type="circle" :percentage="100" status="success" />
    <eh-progress type="circle" :percentage="70" status="warning" />
    <eh-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
