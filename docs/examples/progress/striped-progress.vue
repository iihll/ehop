<template>
  <div class="demo-progress">
    <eh-progress :percentage="50" :stroke-width="15" striped />
    <eh-progress :percentage="30" :stroke-width="15" status="warning" striped striped-flow />
    <eh-progress :percentage="100" :stroke-width="15" status="success" striped striped-flow :duration="10" />
    <eh-progress :percentage="percentage" :stroke-width="15" status="exception" striped striped-flow
      :duration="duration" />
    <eh-button-group>
      <eh-button :icon="Minus" @click="decrease" />
      <eh-button :icon="Plus" @click="increase" />
    </eh-button-group>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Minus, Plus } from '@ehop/icons-vue'

const percentage = ref<number>(70)
const duration = computed(() => Math.floor(percentage.value / 10))

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
