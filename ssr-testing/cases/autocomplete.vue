<template>
  <eh-row class="demo-autocomplete text-center">
    <eh-col :span="12">
      <div class="sub-title my-2 text-sm text-gray-600">
        list suggestions when activated
      </div>
      <eh-autocomplete v-model="state1" :fetch-suggestions="querySearch" class="inline-input" placeholder="Please Input"
        @select="handleSelect" />
    </eh-col>
    <eh-col :span="12">
      <div class="sub-title my-2 text-sm text-gray-600">
        list suggestions on input
      </div>
      <eh-autocomplete v-model="state2" :fetch-suggestions="querySearch" :trigger-on-focus="false" class="inline-input"
        placeholder="Please Input" @select="handleSelect" />
    </eh-col>
  </eh-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface RestaurantItem {
  value: string
  link: string
}

const state1 = ref('')
const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = () => {
  //
}
</script>
