<template>
  <div>
    <div m="b-2">
      <eh-checkbox v-model="config.autoInsertSpace">autoInsertSpace</eh-checkbox>
    </div>

    <eh-config-provider :button="config">
      <eh-button>中文</eh-button>
    </eh-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  autoInsertSpace: true,
})
</script>
