<template>
  <div class="demo-input-suffix">
    <eh-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">Using attributes</span>
      <eh-input v-model="input1" class="w-50 m-2" placeholder="Pick a date" :suffix-icon="Calendar" />
      <eh-input v-model="input2" class="w-50 m-2" placeholder="Type something" :prefix-icon="Search" />
    </eh-row>
  </div>
  <div class="demo-input-suffix">
    <eh-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">Using slots</span>
      <eh-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
        <template #suffix>
          <eh-icon class="el-input__icon">
            <calendar />
          </eh-icon>
        </template>
      </eh-input>
      <eh-input v-model="input4" class="w-50 m-2" placeholder="Type something">
        <template #prefix>
          <eh-icon class="el-input__icon">
            <search />
          </eh-icon>
        </template>
      </eh-input>
    </eh-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@ehop/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
