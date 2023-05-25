<script setup lang="ts">
import { EhButton, EhCol, EhRow } from '@ehop/components'
import Icons from './components/Icons.vue'

function onClick() {
  console.log('test')
}
</script>

<template>
  <Icons />
  <EhRow>
    <EhCol>
      <EhButton @click="onClick">col1</EhButton>
    </EhCol>
    <EhCol>
      <EhButton @click="onClick">col2</EhButton>
    </EhCol>
  </EhRow>
</template>
