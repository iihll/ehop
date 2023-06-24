<template>
  <eh-form ref="formRef" :model="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <eh-form-item label="age" prop="age" :rules="[
      { required: true, message: 'age is required' },
      { type: 'number', message: 'age must be a number' },
    ]">
      <eh-input v-model.number="numberValidateForm.age" type="text" autocomplete="off" />
    </eh-form-item>
    <eh-form-item>
      <eh-button type="primary" @click="submitForm(formRef)">Submit</eh-button>
      <eh-button @click="resetForm(formRef)">Reset</eh-button>
    </eh-form-item>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'ehop'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
