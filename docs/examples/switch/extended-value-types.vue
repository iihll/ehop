<template>
  <eh-tooltip :content="'Switch value: ' + value" placement="top">
    <eh-switch v-model="value" style="--eh-switch-on-color: #13ce66; --eh-switch-off-color: #ff4949" active-value="100"
      inactive-value="0" />
  </eh-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('100')
</script>
