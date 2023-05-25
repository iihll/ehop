<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@ehop/hooks'

import type { CSSProperties } from 'vue'

const props = defineProps({
  /**
   * @description height of the header
   */
  height: {
    type: String,
    default: null,
  },
})

defineOptions({
  name: 'EhHeader',
})

const ns = useNamespace('header')
const style = computed(() => {
  return props.height
    ? (ns.cssVarBlock({
        height: props.height,
      }) as CSSProperties)
    : {}
})
</script>

<template>
  <header :class="ns.b()" :style="style">
    <slot />
  </header>
</template>
