<template>
  <eh-row class="row-bg">
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
  </eh-row>
  <eh-row class="row-bg" justify="center">
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
  </eh-row>
  <eh-row class="row-bg" justify="end">
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
  </eh-row>
  <eh-row class="row-bg" justify="space-between">
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
  </eh-row>
  <eh-row class="row-bg" justify="space-around">
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </eh-col>
    <eh-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
  </eh-col>
  <eh-col :span="6">
    <div class="grid-content ep-bg-purple" />
  </eh-col>
</eh-row>
<eh-row class="row-bg" justify="space-evenly">
  <eh-col :span="6">
    <div class="grid-content ep-bg-purple" />
  </eh-col>
  <eh-col :span="6">
    <div class="grid-content ep-bg-purple-light" />
  </eh-col>
  <eh-col :span="6">
    <div class="grid-content ep-bg-purple" />
  </eh-col>
</eh-row></template>

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
