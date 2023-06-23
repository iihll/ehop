<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
<script lang="ts" setup>
import { useNamespace } from '@ehop/hooks'

defineOptions({
  name: 'EhMain',
})

const ns = useNamespace('main')
</script>
