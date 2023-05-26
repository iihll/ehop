<script setup lang="ts">
import { EhButton, EhCol, EhConfigProvider, EhLink, EhRow, EhScrollbar, EhText } from 'ehop'
import Icons from './components/Icons.vue'

function onClick() {
  console.log('test')
}
</script>

<template>
  <Icons />
  <EhConfigProvider size="large">
    <EhButton type="danger">
      EhConfigProvider
    </EhButton>
  </EhConfigProvider>
  <EhRow>
    <EhCol :span="8">
      <EhButton type="primary" @click="onClick">
        col1
      </EhButton>
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
</template>

<style>
body {
  margin: 0;
}
</style>
