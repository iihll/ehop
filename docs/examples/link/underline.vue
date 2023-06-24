<template>
  <div>
    <eh-link :underline="false">Without Underline</eh-link>
    <eh-link>With Underline</eh-link>
  </div>
</template>
<style scoped>
.el-link {
  margin-right: 8px;
}

.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>
