<template>
  <eh-form ref="formRef" :model="dynamicValidateForm" label-width="120px" class="demo-dynamic">
    <eh-form-item prop="email" label="Email" :rules="[
      {
        required: true,
        message: 'Please input email address',
        trigger: 'blur',
      },
      {
        type: 'email',
        message: 'Please input correct email address',
        trigger: ['blur', 'change'],
      },
    ]">
      <eh-input v-model="dynamicValidateForm.email" />
    </eh-form-item>
    <eh-form-item v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key" :label="'Domain' + index"
      :prop="'domains.' + index + '.value'" :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }">
      <eh-input v-model="domain.value" />
      <eh-button class="mt-2" @click.prevent="removeDomain(domain)">Delete</eh-button>
    </eh-form-item>
    <eh-form-item>
      <eh-button type="primary" @click="submitForm(formRef)">Submit</eh-button>
      <eh-button @click="addDomain">New domain</eh-button>
      <eh-button @click="resetForm(formRef)">Reset</eh-button>
    </eh-form-item>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'ehop'

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
  })
}

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
