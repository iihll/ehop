<template>
  <eh-table :data="tableData" style="width: 100%" max-height="250">
    <eh-table-column fixed prop="date" label="Date" width="150" />
    <eh-table-column prop="name" label="Name" width="120" />
    <eh-table-column prop="state" label="State" width="120" />
    <eh-table-column prop="city" label="City" width="120" />
    <eh-table-column prop="address" label="Address" width="600" />
    <eh-table-column prop="zip" label="Zip" width="120" />
    <eh-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <eh-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
          Remove
        </eh-button>
      </template>
    </eh-table-column>
  </eh-table>
  <eh-button class="mt-4" style="width: 100%" @click="onAddItem">Add Item</eh-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}
</script>
