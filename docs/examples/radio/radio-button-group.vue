<template>
  <eh-radio-group v-model="radio">
    <eh-radio :label="3">Option A</eh-radio>
    <eh-radio :label="6">Option B</eh-radio>
    <eh-radio :label="9">Option C</eh-radio>
  </eh-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
