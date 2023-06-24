<template>
  <eh-radio v-model="radio" disabled label="disabled">Option A</eh-radio>
  <eh-radio v-model="radio" disabled label="selected and disabled">Option B</eh-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
