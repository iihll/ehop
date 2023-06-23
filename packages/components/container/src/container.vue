<template>
  <section :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot />
  </section>
</template>
<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useNamespace } from '@ehop/hooks'

import type { Component, VNode } from 'vue'

defineOptions({
  name: 'EhContainer',
})
const props = defineProps({
  /**
   * @description layout direction for child elements
   */
  direction: {
    type: String,
  },
})
const slots = useSlots()

const ns = useNamespace('container')

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name
      return tag === 'EhHeader' || tag === 'EhFooter'
    })
  } else {
    return false
  }
})
</script>
