<template>
  <eh-form :inline="true" :model="formInline" class="demo-form-inline">
    <eh-form-item label="Approved by">
      <eh-input v-model="formInline.user" placeholder="Approved by" clearable />
    </eh-form-item>
    <eh-form-item label="Activity zone">
      <eh-select v-model="formInline.region" placeholder="Activity zone" clearable>
        <eh-option label="Zone one" value="shanghai" />
        <eh-option label="Zone two" value="beijing" />
      </eh-select>
    </eh-form-item>
    <eh-form-item label="Activity time">
      <eh-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
    </eh-form-item>
    <eh-form-item>
      <eh-button type="primary" @click="onSubmit">Query</eh-button>
    </eh-form-item>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
