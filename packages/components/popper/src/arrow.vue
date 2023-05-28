<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from 'vue'
import { useNamespace } from '@ehop/hooks'
import { POPPER_CONTENT_INJECTION_KEY } from './constants'
import { popperArrowProps } from './arrow'

const props = defineProps(popperArrowProps)

defineOptions({
  name: 'EhPopperArrow',
  inheritAttrs: false,
})

const ns = useNamespace('popper')
const { arrowOffset, arrowRef, arrowStyle } = inject(
  POPPER_CONTENT_INJECTION_KEY,
  undefined,
)!

watch(
  () => props.arrowOffset,
  (val) => {
    arrowOffset.value = val
  },
)
onBeforeUnmount(() => {
  arrowRef.value = undefined
})

defineExpose({
  /**
   * @description Arrow element
   */
  arrowRef,
})
</script>

<template>
  <span
    ref="arrowRef"
    :class="ns.e('arrow')"
    :style="arrowStyle"
    data-popper-arrow
  />
</template>
