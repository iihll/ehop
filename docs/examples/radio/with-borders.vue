<template>
  <div>
    <eh-radio-group v-model="radio1">
      <eh-radio label="1" size="large" border>Option A</eh-radio>
      <eh-radio label="2" size="large" border>Option B</eh-radio>
    </eh-radio-group>
  </div>
  <div style="margin-top: 20px">
    <eh-radio-group v-model="radio2">
      <eh-radio label="1" border>Option A</eh-radio>
      <eh-radio label="2" border>Option B</eh-radio>
    </eh-radio-group>
  </div>
  <div style="margin-top: 20px">
    <eh-radio-group v-model="radio3" size="small">
      <eh-radio label="1" border>Option A</eh-radio>
      <eh-radio label="2" border disabled>Option B</eh-radio>
    </eh-radio-group>
  </div>
  <div style="margin-top: 20px">
    <eh-radio-group v-model="radio4" size="small" disabled>
      <eh-radio label="1" border>Option A</eh-radio>
      <eh-radio label="2" border>Option B</eh-radio>
    </eh-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>
