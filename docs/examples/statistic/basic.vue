<template>
  <eh-row>
    <eh-col :span="6">
      <eh-statistic title="Daily active users" :value="268500" />
    </eh-col>
    <eh-col :span="6">
      <eh-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <eh-icon style="margin-left: 4px" :size="12">
              <Male />
            </eh-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </eh-statistic>
    </eh-col>
    <eh-col :span="6">
      <eh-statistic title="Total Transactions" :value="172000" />
    </eh-col>
    <eh-col :span="6">
      <eh-statistic title="Feedback number" :value="562">
        <template #suffix>
          <eh-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </eh-icon>
        </template>
      </eh-statistic>
    </eh-col>
  </eh-row>
</template>

<script lang="ts" setup>
import { ChatLineRound, Male } from '@ehop/icons-vue'
</script>

<style scoped>
.el-col {
  text-align: center;
}
</style>
