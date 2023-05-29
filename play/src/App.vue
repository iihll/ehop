<script setup lang="ts">
import {
  EhAside,
  EhButton,
  EhCol,
  EhConfigProvider,
  EhContainer,
  EhDatePicker,
  EhFooter,
  EhForm,
  EhFormItem,
  EhHeader,
  EhInput,
  EhLink,
  EhMain,
  EhOption,
  EhRadio,
  EhRadioGroup,
  EhRow,
  EhScrollbar,
  EhSelect,
  EhSpace,
  EhTag,
  EhText,
  EhTimePicker,
  EhTooltip,
} from 'ehop'
import { reactive } from 'vue'
import Icons from './components/Icons.vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: 1,
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '1',
})

function onSubmit() {
  console.log('submit!')
}

function onClick() {
  console.log('test')
}
</script>

<template>
  <Icons />

  <EhContainer>
    <EhHeader>Header</EhHeader>
    <EhContainer>
      <EhAside width="200px">
        Aside
      </EhAside>
      <EhContainer>
        <EhMain>Main</EhMain>
        <EhFooter>Footer</EhFooter>
      </EhContainer>
    </EhContainer>
  </EhContainer>

  <EhConfigProvider size="large">
    <EhButton type="danger">
      EhConfigProvider
    </EhButton>
  </EhConfigProvider>
  <EhRow>
    <EhCol :span="8">
      <EhSpace :size="22">
        <EhButton type="primary" @click="onClick">
          col1-1
        </EhButton>
        <EhButton type="primary" @click="onClick">
          col1-2
        </EhButton>
      </EhSpace>
    </EhCol>
    <EhCol :span="9">
      <EhButton @click="onClick">
        col2
      </EhButton>
    </EhCol>
    <EhCol>
      <EhLink href="https://baidu.com" target="_blank">
        https://baidu.com
      </EhLink>
    </EhCol>
    <EhCol :span="1">
      <EhText truncated type="warning">
        render ellipsis
      </EhText>
    </EhCol>
  </EhRow>
  <EhScrollbar height="400px">
    <p v-for="item in 20" :key="item">
      {{ item }}
    </p>
  </EhScrollbar>

  <EhRow>
    <EhCol :span="12">
      <EhForm :model="form" label-width="120px">
        <EhFormItem label="姓名">
          <EhInput v-model="form.name" placeholder="请输入姓名" />
        </EhFormItem>
        <EhFormItem label="操作">
          <EhButton type="primary" @click="onSubmit">
            Create
          </EhButton>
          <EhButton>Cancel</EhButton>
        </EhFormItem>
        <EhFormItem label="Tag">
          <EhTooltip content="Top Left prompts info">
            <EhTag>tag</EhTag>
          </EhTooltip>
        </EhFormItem>
        <EhFormItem label="region">
          <EhSelect v-model="form.region">
            <EhOption :value="1" label="l1" />
            <EhOption :value="2" label="l2" />
          </EhSelect>
        </EhFormItem>
      </EhForm>
    </EhCol>
    <EhCol :span="12">
      <EhDatePicker
        type="date"
        placeholder="Pick a day"
      />
      <EhTimePicker
        arrow-control
        placeholder="Arbitrary time"
      />
      <EhRadioGroup v-model="form.desc">
        <EhRadio label="1" size="large">
          Option 1
        </EhRadio>
        <EhRadio label="2" size="large">
          Option 2
        </EhRadio>
      </EhRadioGroup>
    </EhCol>
  </EhRow>
</template>

<style>
body {
  margin: 0;
}
</style>
