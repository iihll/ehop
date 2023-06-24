<template>
  <eh-form :model="form" label-width="120px">
    <eh-form-item label="Activity name">
      <eh-input v-model="form.name" />
    </eh-form-item>
    <eh-form-item label="Activity zone">
      <eh-select v-model="form.region" placeholder="please select your zone">
        <eh-option label="Zone one" value="shanghai" />
        <eh-option label="Zone two" value="beijing" />
      </eh-select>
    </eh-form-item>
    <eh-form-item label="Activity time">
      <eh-col :span="11">
        <eh-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
      </eh-col>
      <eh-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </eh-col>
      <eh-col :span="11">
        <eh-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
      </eh-col>
    </eh-form-item>
    <eh-form-item label="Instant delivery">
      <eh-switch v-model="form.delivery" />
    </eh-form-item>
    <eh-form-item label="Activity type">
      <eh-checkbox-group v-model="form.type">
        <eh-checkbox label="Online activities" name="type" />
        <eh-checkbox label="Promotion activities" name="type" />
        <eh-checkbox label="Offline activities" name="type" />
        <eh-checkbox label="Simple brand exposure" name="type" />
      </eh-checkbox-group>
    </eh-form-item>
    <eh-form-item label="Resources">
      <eh-radio-group v-model="form.resource">
        <eh-radio label="Sponsor" />
        <eh-radio label="Venue" />
      </eh-radio-group>
    </eh-form-item>
    <eh-form-item label="Activity form">
      <eh-input v-model="form.desc" type="textarea" />
    </eh-form-item>
    <eh-form-item>
      <eh-button type="primary" @click="onSubmit">Create</eh-button>
      <eh-button>Cancel</eh-button>
    </eh-form-item>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
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

const onSubmit = () => {
  console.log('submit!')
}
</script>
