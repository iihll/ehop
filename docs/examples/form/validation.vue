<template>
  <eh-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
    status-icon>
    <eh-form-item label="Activity name" prop="name">
      <eh-input v-model="ruleForm.name" />
    </eh-form-item>
    <eh-form-item label="Activity zone" prop="region">
      <eh-select v-model="ruleForm.region" placeholder="Activity zone">
        <eh-option label="Zone one" value="shanghai" />
        <eh-option label="Zone two" value="beijing" />
      </eh-select>
    </eh-form-item>
    <eh-form-item label="Activity count" prop="count">
      <eh-select-v2 v-model="ruleForm.count" placeholder="Activity count" :options="options" />
    </eh-form-item>
    <eh-form-item label="Activity time" required>
      <eh-col :span="11">
        <eh-form-item prop="date1">
          <eh-date-picker v-model="ruleForm.date1" type="date" label="Pick a date" placeholder="Pick a date"
            style="width: 100%" />
        </eh-form-item>
      </eh-col>
      <eh-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </eh-col>
      <eh-col :span="11">
        <eh-form-item prop="date2">
          <eh-time-picker v-model="ruleForm.date2" label="Pick a time" placeholder="Pick a time" style="width: 100%" />
        </eh-form-item>
      </eh-col>
    </eh-form-item>
    <eh-form-item label="Instant delivery" prop="delivery">
      <eh-switch v-model="ruleForm.delivery" />
    </eh-form-item>
    <eh-form-item label="Activity type" prop="type">
      <eh-checkbox-group v-model="ruleForm.type">
        <eh-checkbox label="Online activities" name="type" />
        <eh-checkbox label="Promotion activities" name="type" />
        <eh-checkbox label="Offline activities" name="type" />
        <eh-checkbox label="Simple brand exposure" name="type" />
      </eh-checkbox-group>
    </eh-form-item>
    <eh-form-item label="Resources" prop="resource">
      <eh-radio-group v-model="ruleForm.resource">
        <eh-radio label="Sponsorship" />
        <eh-radio label="Venue" />
      </eh-radio-group>
    </eh-form-item>
    <eh-form-item label="Activity form" prop="desc">
      <eh-input v-model="ruleForm.desc" type="textarea" />
    </eh-form-item>
    <eh-form-item>
      <eh-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </eh-button>
      <eh-button @click="resetForm(ruleFormRef)">Reset</eh-button>
    </eh-form-item>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'ehop'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
