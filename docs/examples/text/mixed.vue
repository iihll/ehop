<template>
  <eh-space direction="vertical">
    <eh-text>
      <eh-icon>
        <ElementPlus />
      </eh-icon>
      ehop
    </eh-text>
    <eh-row>
      <eh-text>Rate</eh-text>
      <eh-rate class="ml-1" />
    </eh-row>
    <eh-text>
      This is text mixed icon
      <eh-icon>
        <Bell />
      </eh-icon>
      and component
      <eh-button>Button</eh-button>
    </eh-text>
  </eh-space>
</template>

<script lang="ts" setup>
import { Bell, ElementPlus } from '@ehop/icons-vue'
</script>
