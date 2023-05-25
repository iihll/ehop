<script setup lang="ts">
import { useNamespace } from '@ehop/hooks'

defineOptions({
  name: 'EhMain',
})

const ns = useNamespace('main')
</script>

<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
