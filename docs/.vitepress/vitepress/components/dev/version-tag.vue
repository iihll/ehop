<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <eh-tag size="small" effect="plain" hit round class="ml-2">
    {{ version }}
  </eh-tag>
</template>
