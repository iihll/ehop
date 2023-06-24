<template>
  <eh-row :gutter="20">
    <eh-col :span="16">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
  </eh-row>
  <eh-row :gutter="20">
    <eh-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
  </eh-row>
  <eh-row :gutter="20">
    <eh-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="16">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
  </eh-row>
</template>

<style>.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}</style>
