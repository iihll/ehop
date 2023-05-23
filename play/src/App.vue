<script setup lang="ts">
import { EhButton } from '@ehop/components'

function onClick() {
  console.log('test')
}
</script>

<template>
  <EhButton @click="onClick">
    test
  </EhButton>
  <EhButton>test1</EhButton>
</template>
