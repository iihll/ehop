<template>
  <eh-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <eh-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</eh-checkbox>
  </eh-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>
