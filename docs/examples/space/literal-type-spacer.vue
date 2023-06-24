<template>
  <eh-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <eh-button> button {{ i }} </eh-button>
    </div>
  </eh-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>
