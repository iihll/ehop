<template>
  <eh-steps :active="1">
    <eh-step title="Step 1" :icon="Edit" />
    <eh-step title="Step 2" :icon="Upload" />
    <eh-step title="Step 3" :icon="Picture" />
  </eh-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, Upload } from '@ehop/icons-vue'
</script>
