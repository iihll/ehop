<template>
  <div>
    <eh-radio-group v-model="size" label="size control">
      <eh-radio-button label="large">large</eh-radio-button>
      <eh-radio-button label="default">default</eh-radio-button>
      <eh-radio-button label="small">small</eh-radio-button>
    </eh-radio-group>
    <eh-radio-group v-model="labelPosition" label="position control">
      <eh-radio-button label="left">Left</eh-radio-button>
      <eh-radio-button label="right">Right</eh-radio-button>
      <eh-radio-button label="top">Top</eh-radio-button>
    </eh-radio-group>
  </div>
  <br />
  <eh-form ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition" :size="size">
    <eh-form-item label="Activity name">
      <eh-input v-model="sizeForm.name" />
    </eh-form-item>
    <eh-form-item label="Activity zone">
      <eh-select v-model="sizeForm.region" placeholder="please select your zone">
        <eh-option label="Zone one" value="shanghai" />
        <eh-option label="Zone two" value="beijing" />
      </eh-select>
    </eh-form-item>
    <eh-form-item label="Activity time">
      <eh-col :span="11">
        <eh-date-picker v-model="sizeForm.date1" type="date" label="Pick a date" placeholder="Pick a date"
          style="width: 100%" />
      </eh-col>
      <eh-col class="text-center" :span="1" style="margin: 0 0.5rem">-</eh-col>
      <eh-col :span="11">
        <eh-time-picker v-model="sizeForm.date2" label="Pick a time" placeholder="Pick a time" style="width: 100%" />
      </eh-col>
    </eh-form-item>
    <eh-form-item label="Activity type">
      <eh-checkbox-group v-model="sizeForm.type">
        <eh-checkbox-button label="Online activities" name="type" />
        <eh-checkbox-button label="Promotion activities" name="type" />
      </eh-checkbox-group>
    </eh-form-item>
    <eh-form-item label="Resources">
      <eh-radio-group v-model="sizeForm.resource">
        <eh-radio border label="Sponsor" />
        <eh-radio border label="Venue" />
      </eh-radio-group>
    </eh-form-item>
    <eh-form-item>
      <eh-button type="primary" @click="onSubmit">Create</eh-button>
      <eh-button>Cancel</eh-button>
    </eh-form-item>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const size = ref('default')
const labelPosition = ref('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>

<style>
.el-radio-group {
  margin-right: 12px;
}
</style>
