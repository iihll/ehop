<script setup lang="ts">
import { EhButton, EhIcon } from '@ehop/components'
import Icons from './components/Icons.vue'

function onClick() {
  console.log('test')
}
</script>

<template>
  <Icons />
  <EhButton :loading="true">
    test
  </EhButton>
  <EhButton icon="EhIconLoading" />
  <EhButton type="primary" icon="EhIconLoading" @click="onClick">
    test2
  </EhButton>
  <EhIcon :size="66">
    <EhIconLoading />
  </EhIcon>
</template>
