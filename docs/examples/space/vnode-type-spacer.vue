<template>
  <eh-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <eh-button> button {{ i }} </eh-button>
    </div>
  </eh-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElDivider } from 'ehop'

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })
</script>
