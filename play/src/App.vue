<script setup lang="ts">
import { EhAside, EhButton, EhCol, EhConfigProvider, EhContainer, EhFooter, EhForm, EhFormItem, EhHeader, EhLink, EhMain, EhRow, EhScrollbar, EhSpace, EhText } from 'ehop'
import { reactive } from 'vue'
import Icons from './components/Icons.vue'

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

  <EhForm :model="form" label-width="120px">
    <EhFormItem label="操作">
      <EhButton type="primary" @click="onSubmit">
        Create
      </EhButton>
      <EhButton>Cancel</EhButton>
    </EhFormItem>
  </EhForm>
</template>

<style>
body {
  margin: 0;
}
</style>
