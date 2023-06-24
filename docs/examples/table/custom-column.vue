<template>
  <eh-table :data="tableData" style="width: 100%">
    <eh-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <eh-icon>
            <timer />
          </eh-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </eh-table-column>
    <eh-table-column label="Name" width="180">
      <template #default="scope">
        <eh-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <eh-tag>{{ scope.row.name }}</eh-tag>
          </template>
        </eh-popover>
      </template>
    </eh-table-column>
    <eh-table-column label="Operations">
      <template #default="scope">
        <eh-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</eh-button>
        <eh-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</eh-button>
      </template>
    </eh-table-column>
  </eh-table>
</template>

<script lang="ts" setup>
import { Timer } from '@ehop/icons-vue'

interface User {
  date: string
  name: string
  address: string
}

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
