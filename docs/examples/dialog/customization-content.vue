<template>
  <eh-button text @click="dialogTableVisible = true">
    open a Table nested Dialog
  </eh-button>

  <eh-dialog v-model="dialogTableVisible" title="Shipping address">
    <eh-table :data="gridData">
      <eh-table-column property="date" label="Date" width="150" />
      <eh-table-column property="name" label="Name" width="200" />
      <eh-table-column property="address" label="Address" />
    </eh-table>
  </eh-dialog>

  <!-- Form -->
  <eh-button text @click="dialogFormVisible = true">
    open a Form nested Dialog
  </eh-button>

  <eh-dialog v-model="dialogFormVisible" title="Shipping address">
    <eh-form :model="form">
      <eh-form-item label="Promotion name" :label-width="formLabelWidth">
        <eh-input v-model="form.name" autocomplete="off" />
      </eh-form-item>
      <eh-form-item label="Zones" :label-width="formLabelWidth">
        <eh-select v-model="form.region" placeholder="Please select a zone">
          <eh-option label="Zone No.1" value="shanghai" />
          <eh-option label="Zone No.2" value="beijing" />
        </eh-select>
      </eh-form-item>
    </eh-form>
    <template #footer>
      <span class="dialog-footer">
        <eh-button @click="dialogFormVisible = false">Cancel</eh-button>
        <eh-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </eh-button>
      </span>
    </template>
  </eh-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}

.el-select {
  width: 300px;
}

.el-input {
  width: 300px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}</style>
