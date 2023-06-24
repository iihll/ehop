<template>
  <eh-radio-group v-model="labelPosition" label="label position">
    <eh-radio-button label="left">Left</eh-radio-button>
    <eh-radio-button label="right">Right</eh-radio-button>
    <eh-radio-button label="top">Top</eh-radio-button>
  </eh-radio-group>
  <div style="margin: 20px" />
  <eh-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
    <eh-form-item label="Name">
      <eh-input v-model="formLabelAlign.name" />
    </eh-form-item>
    <eh-form-item label="Activity zone">
      <eh-input v-model="formLabelAlign.region" />
    </eh-form-item>
    <eh-form-item label="Activity form">
      <eh-input v-model="formLabelAlign.type" />
    </eh-form-item>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
