<template>
  <eh-table :data="filterTableData" style="width: 100%">
    <eh-table-column label="Date" prop="date" />
    <eh-table-column label="Name" prop="name" />
    <eh-table-column align="right">
      <template #header>
        <eh-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <eh-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</eh-button>
        <eh-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</eh-button>
      </template>
    </eh-table-column>
  </eh-table>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
