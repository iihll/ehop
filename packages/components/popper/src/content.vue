<script lang="ts" setup>
import {
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import { isNil } from 'lodash-unified'
import EhFocusTrap from '@ehop/components/focus-trap'
import { formItemContextKey } from '@ehop/components/form'
import { isElement } from '@ehop/utils'
import type { WatchStopHandle } from 'vue'
import { POPPER_CONTENT_INJECTION_KEY } from './constants'
import { popperContentEmits, popperContentProps } from './content'
import {
  usePopperContent,
  usePopperContentDOM,
  usePopperContentFocusTrap,
} from './composables'

const props = defineProps(popperContentProps)

const emit = defineEmits(popperContentEmits)

defineOptions({
  name: 'EhPopperContent',
})

const {
  focusStartRef,
  trapped,

  onFocusAfterReleased,
  onFocusAfterTrapped,
  onFocusInTrap,
  onFocusoutPrevented,
  onReleaseRequested,
} = usePopperContentFocusTrap(props, emit)

const { attributes, arrowRef, contentRef, styles, instanceRef, role, update }
  = usePopperContent(props)

const {
  ariaModal,
  arrowStyle,
  contentAttrs,
  contentClass,
  contentStyle,
  updateZIndex,
} = usePopperContentDOM(props, {
  styles,
  attributes,
  role,
})

const formItemContext = inject(formItemContextKey, undefined)
const arrowOffset = ref<number>()

provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowStyle,
  arrowRef,
  arrowOffset,
})

if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
  // disallow auto-id from inside popper content
  provide(formItemContextKey, {
    ...formItemContext,
    addInputId: NOOP,
    removeInputId: NOOP,
  })
}

let triggerTargetAriaStopWatch: WatchStopHandle | undefined

function updatePopper(shouldUpdateZIndex = true) {
  update()
  shouldUpdateZIndex && updateZIndex()
}

function togglePopperAlive() {
  updatePopper(false)
  if (props.visible && props.focusOnShow)
    trapped.value = true
  else if (props.visible === false)
    trapped.value = false
}

onMounted(() => {
  watch(
    () => props.triggerTargetEl,
    (triggerTargetEl, prevTriggerTargetEl) => {
      triggerTargetAriaStopWatch?.()
      triggerTargetAriaStopWatch = undefined

      const el = unref(triggerTargetEl || contentRef.value)
      const prevEl = unref(prevTriggerTargetEl || contentRef.value)

      if (isElement(el)) {
        triggerTargetAriaStopWatch = watch(
          [role, () => props.ariaLabel, ariaModal, () => props.id],
          (watches) => {
            ['role', 'aria-label', 'aria-modal', 'id'].forEach((key, idx) => {
              isNil(watches[idx])
                ? el.removeAttribute(key)
                : el.setAttribute(key, watches[idx]!)
            })
          },
          { immediate: true },
        )
      }
      if (prevEl !== el && isElement(prevEl)) {
        ['role', 'aria-label', 'aria-modal', 'id'].forEach((key) => {
          prevEl.removeAttribute(key)
        })
      }
    },
    { immediate: true },
  )

  watch(() => props.visible, togglePopperAlive, { immediate: true })
})

onBeforeUnmount(() => {
  triggerTargetAriaStopWatch?.()
  triggerTargetAriaStopWatch = undefined
})

defineExpose({
  /**
   * @description popper content element
   */
  popperContentRef: contentRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef: instanceRef,
  /**
   * @description method for updating popper
   */
  updatePopper,

  /**
   * @description content style
   */
  contentStyle,
})
</script>

<template>
  <div
    ref="contentRef"
    v-bind="contentAttrs"
    :style="contentStyle"
    :class="contentClass"
    tabindex="-1"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <EhFocusTrap
      :trapped="trapped"
      :trap-on-focus-in="true"
      :focus-trap-el="contentRef"
      :focus-start-el="focusStartRef"
      @focus-after-trapped="onFocusAfterTrapped"
      @focus-after-released="onFocusAfterReleased"
      @focusin="onFocusInTrap"
      @focusout-prevented="onFocusoutPrevented"
      @release-requested="onReleaseRequested"
    >
      <slot />
    </EhFocusTrap>
  </div>
</template>
