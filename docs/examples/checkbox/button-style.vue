<template>
  <div>
    <eh-checkbox-group v-model="checkboxGroup1" size="large">
      <eh-checkbox-button v-for="city in cities" :key="city" :label="city">
        {{ city }}
      </eh-checkbox-button>
    </eh-checkbox-group>
  </div>
  <div class="demo-button-style">
    <eh-checkbox-group v-model="checkboxGroup2">
      <eh-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</eh-checkbox-button>
    </eh-checkbox-group>
  </div>
  <div class="demo-button-style">
    <eh-checkbox-group v-model="checkboxGroup3" size="small">
      <eh-checkbox-button v-for="city in cities" :key="city" :label="city" :disabled="city === 'Beijing'">{{ city
      }}</eh-checkbox-button>
    </eh-checkbox-group>
  </div>
  <div class="demo-button-style">
    <eh-checkbox-group v-model="checkboxGroup4" size="small" disabled>
      <eh-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</eh-checkbox-button>
    </eh-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
