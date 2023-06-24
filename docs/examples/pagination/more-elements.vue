<template>
  <div class="flex items-center mb-4">
    <eh-radio-group v-model="small" class="mr-4">
      <eh-radio-button :label="false">default</eh-radio-button>
      <eh-radio-button :label="true">small</eh-radio-button>
    </eh-radio-group>
    <div>
      background:
      <eh-switch v-model="background" class="ml-2" />
    </div>
    <div class="ml-4">
      disabled: <eh-switch v-model="disabled" class="ml-2" />
    </div>
  </div>

  <hr class="my-4" />

  <div class="demo-pagination-block">
    <div class="demonstration">Total item count</div>
    <eh-pagination v-model:current-page="currentPage1" :page-size="100" :small="small" :disabled="disabled"
      :background="background" layout="total, prev, pager, next" :total="1000" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
  <div class="demo-pagination-block">
    <div class="demonstration">Change page size</div>
    <eh-pagination v-model:current-page="currentPage2" v-model:page-size="pageSize2" :page-sizes="[100, 200, 300, 400]"
      :small="small" :disabled="disabled" :background="background" layout="sizes, prev, pager, next" :total="1000"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
  <div class="demo-pagination-block">
    <div class="demonstration">Jump to</div>
    <eh-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled"
      :background="background" layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
  <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <eh-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
      :small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
      :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.demo-pagination-block+.demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
