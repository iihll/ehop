<template>
  <eh-radio-group v-model="tableLayout">
    <eh-radio-button label="fixed" />
    <eh-radio-button label="auto" />
  </eh-radio-group>
  <eh-table :data="tableData" :table-layout="tableLayout">
    <eh-table-column prop="date" label="Date" />
    <eh-table-column prop="name" label="Name" />
    <eh-table-column prop="address" label="Address" />
  </eh-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
