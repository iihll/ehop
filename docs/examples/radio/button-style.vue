<template>
  <div>
    <eh-radio-group v-model="radio1" size="large">
      <eh-radio-button label="New York" />
      <eh-radio-button label="Washington" />
      <eh-radio-button label="Los Angeles" />
      <eh-radio-button label="Chicago" />
    </eh-radio-group>
  </div>
  <div style="margin-top: 20px">
    <eh-radio-group v-model="radio2">
      <eh-radio-button label="New York" />
      <eh-radio-button label="Washington" />
      <eh-radio-button label="Los Angeles" />
      <eh-radio-button label="Chicago" />
    </eh-radio-group>
  </div>
  <div style="margin-top: 20px">
    <eh-radio-group v-model="radio3" size="small">
      <eh-radio-button label="New York" />
      <eh-radio-button label="Washington" disabled />
      <eh-radio-button label="Los Angeles" />
      <eh-radio-button label="Chicago" />
    </eh-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
</script>
