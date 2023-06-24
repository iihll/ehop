<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div class="flex">
    <eh-button color="#626aef" :dark="isDark">Default</eh-button>
    <eh-button color="#626aef" :dark="isDark" plain>Plain</eh-button>

    <eh-button color="#626aef" :dark="isDark" disabled>Disabled</eh-button>
    <eh-button color="#626aef" :dark="isDark" disabled plain>Disabled Plain</eh-button>
  </div>
</template>
