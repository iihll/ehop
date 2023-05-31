<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@ehop/hooks'
import type { CSSProperties } from 'vue'


const props = defineProps({
  /**
   * @description width of the side section
   */
  width: {
    type: String,
    default: null,
  },
})
defineOptions({
  name: 'EhAside',
})
const ns = useNamespace('aside')
const style = computed(
  () =>
    (props.width ? ns.cssVarBlock({ width: props.width }) : {}) as CSSProperties,
)
</script>

<template>
  <aside :class="ns.b()" :style="style">
    <slot />
  </aside>
</template>
