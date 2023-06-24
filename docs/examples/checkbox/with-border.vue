<template>
  <div>
    <eh-checkbox v-model="checked1" label="Option1" size="large" border />
    <eh-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mt-4">
    <eh-checkbox v-model="checked3" label="Option1" border />
    <eh-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mt-4">
    <eh-checkbox-group v-model="checkboxGroup1" size="small">
      <eh-checkbox label="Option1" border />
      <eh-checkbox label="Option2" border />
    </eh-checkbox-group>
  </div>
  <div class="mt-4">
    <eh-checkbox-group v-model="checkboxGroup1" size="small">
      <eh-checkbox label="Option1" border disabled />
      <eh-checkbox label="Option2" border disabled />
    </eh-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Option1'])
</script>
