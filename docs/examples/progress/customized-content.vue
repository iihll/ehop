<template>
  <div class="demo-progress">
    <eh-progress :percentage="50">
      <eh-button text>Content</eh-button>
    </eh-progress>
    <eh-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
      <span>Content</span>
    </eh-progress>
    <eh-progress type="circle" :percentage="100" status="success">
      <eh-button type="success" :icon="Check" circle />
    </eh-progress>
    <eh-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </eh-progress>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@ehop/icons-vue'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}

.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
