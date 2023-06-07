<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@ehop/hooks'
import type { CSSProperties } from 'vue'
import '../style'

const props = defineProps({
  /**
   * @description height of the footer
   */
  height: {
    type: String,
    default: null,
  },
})
defineOptions({
  name: 'EhFooter',
})
const ns = useNamespace('footer')

const style = computed(
  () =>
    (props.height
      ? ns.cssVarBlock({ height: props.height })
      : {}) as CSSProperties,
)
</script>

<template>
  <footer :class="ns.b()" :style="style">
    <slot />
  </footer>
</template>
