<script setup lang="ts">
import { useNamespace } from '@ehop/hooks'
import '../style'

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
