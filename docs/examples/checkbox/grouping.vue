<template>
  <eh-checkbox-group v-model="checkList">
    <eh-checkbox label="Option A" />
    <eh-checkbox label="Option B" />
    <eh-checkbox label="Option C" />
    <eh-checkbox label="disabled" disabled />
    <eh-checkbox label="selected and disabled" disabled />
  </eh-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>
