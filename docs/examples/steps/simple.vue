<template>
  <eh-steps :space="200" :active="1" simple>
    <eh-step title="Step 1" :icon="Edit" />
    <eh-step title="Step 2" :icon="UploadFilled" />
    <eh-step title="Step 3" :icon="Picture" />
  </eh-steps>

  <eh-steps :active="1" finish-status="success" simple style="margin-top: 20px">
    <eh-step title="Step 1" />
    <eh-step title="Step 2" />
    <eh-step title="Step 3" />
  </eh-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, UploadFilled } from '@ehop/icons-vue'
</script>
