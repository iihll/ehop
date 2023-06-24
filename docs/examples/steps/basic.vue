<template>
  <eh-steps :active="active" finish-status="success">
    <eh-step title="Step 1" />
    <eh-step title="Step 2" />
    <eh-step title="Step 3" />
  </eh-steps>

  <eh-button style="margin-top: 12px" @click="next">Next step</eh-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
