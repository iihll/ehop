<template>
  <eh-rate v-model="value" size="large" />
  <br />
  <eh-rate v-model="value" />
  <br />
  <eh-rate v-model="value" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>
