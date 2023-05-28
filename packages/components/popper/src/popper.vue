<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import type { Instance as PopperInstance } from '@popperjs/core'
import { POPPER_INJECTION_KEY } from './constants'
import { popperProps } from './popper'

import type { ElPopperInjectionContext } from './constants'

const props = defineProps(popperProps)
defineOptions({
  name: 'EhPopper',
  inheritAttrs: false,
})
const triggerRef = ref<HTMLElement>()
const popperInstanceRef = ref<PopperInstance>()
const contentRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()
const role = computed(() => props.role)

const popperProvides = {
  /**
   * @description trigger element
   */
  triggerRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef,
  /**
   * @description popper content element
   */
  contentRef,
  /**
   * @description popper reference element
   */
  referenceRef,
  /**
   * @description role determines how aria attributes are distributed
   */
  role,
} as ElPopperInjectionContext

defineExpose(popperProvides)

provide(POPPER_INJECTION_KEY, popperProvides)
</script>

<template>
  <slot />
</template>
