<template>
  <div>
    <eh-check-tag checked style="margin-right: 8px">Checked</eh-check-tag>
    <eh-check-tag :checked="checked" @change="onChange">Toggle me</eh-check-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)

const onChange = (status: boolean) => {
  checked.value = status
}
</script>
