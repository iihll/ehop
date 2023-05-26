<script setup lang="ts">
import { EhButton, EhCol, EhConfigProvider, EhLink, EhRow } from 'ehop'
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
    <EhCol :span="9">
      <EhLink href="https://baidu.com" target="_blank">
        col2
      </EhLink>
    </EhCol>
  </EhRow>
</template>
