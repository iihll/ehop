<script setup lang="ts">
import { EhButton } from '@ehop/components'
import Icons from './components/Icons.vue'

function onClick() {
  console.log('test')
}
</script>

<template>
  <Icons />
  <EhButton @click="onClick">
    test
  </EhButton>
  <EhButton>test1</EhButton>
</template>
