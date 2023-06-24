<template>
  <eh-dropdown size="large" split-button type="primary">
    Large
    <template #dropdown>
      <eh-dropdown-menu>
        <eh-dropdown-item>Action 1</eh-dropdown-item>
        <eh-dropdown-item>Action 2</eh-dropdown-item>
        <eh-dropdown-item>Action 3</eh-dropdown-item>
        <eh-dropdown-item>Action 4</eh-dropdown-item>
      </eh-dropdown-menu>
    </template>
  </eh-dropdown>

  <eh-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <eh-dropdown-menu>
        <eh-dropdown-item>Action 1</eh-dropdown-item>
        <eh-dropdown-item>Action 2</eh-dropdown-item>
        <eh-dropdown-item>Action 3</eh-dropdown-item>
        <eh-dropdown-item>Action 4</eh-dropdown-item>
      </eh-dropdown-menu>
    </template>
  </eh-dropdown>

  <eh-dropdown size="small" split-button type="primary">
    Small
    <template #dropdown>
      <eh-dropdown-menu>
        <eh-dropdown-item>Action 1</eh-dropdown-item>
        <eh-dropdown-item>Action 2</eh-dropdown-item>
        <eh-dropdown-item>Action 3</eh-dropdown-item>
        <eh-dropdown-item>Action 4</eh-dropdown-item>
      </eh-dropdown-menu>
    </template>
  </eh-dropdown>
</template>
<style scoped>
.example-showcase .el-dropdown+.el-dropdown {
  margin-left: 15px;
}
</style>
