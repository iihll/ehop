<template>
  <div class="demo-color-sizes">
    <eh-color-picker v-model="color" size="large" />
    <eh-color-picker v-model="color" />
    <eh-color-picker v-model="color" size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('409EFF')
</script>

<style>
.demo-color-sizes .el-color-picker:not(:last-child) {
  margin-right: 16px;
}
</style>
