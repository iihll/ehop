<template>
  <div>
    <eh-link disabled>default</eh-link>
    <eh-link type="primary" disabled>primary</eh-link>
    <eh-link type="success" disabled>success</eh-link>
    <eh-link type="warning" disabled>warning</eh-link>
    <eh-link type="danger" disabled>danger</eh-link>
    <eh-link type="info" disabled>info</eh-link>
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
