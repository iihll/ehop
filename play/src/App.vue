<script setup lang="ts">
// import { EhButton } from '@ehop/components'
import Icons from './components/Icons.vue'

function onClick() {
  console.log('test')
}
</script>

<template>
  <Icons />
  <EhButton :loading="true" @click="onClick">
    test
  </EhButton>
  <EhButton icon="EhIconLoading"></EhButton>
  <EhButton icon="EhIconLoading">test2</EhButton>
</template>
