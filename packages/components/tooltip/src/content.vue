<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, ref, unref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useNamespace, usePopperContainerId } from '@ehop/hooks'
import { composeEventHandlers } from '@ehop/utils'
import { EhPopperContent } from '@ehop/components/popper'
import { TOOLTIP_INJECTION_KEY } from './constants'
import { useTooltipContentProps } from './content'

const props = defineProps(useTooltipContentProps)

defineOptions({
  name: 'EhTooltipContent',
  inheritAttrs: false,
})

const { selector } = usePopperContainerId()
const ns = useNamespace('tooltip')
// TODO any is temporary, replace with `InstanceType<typeof EhPopperContent> | null` later
const contentRef = ref<any>(null)
const destroyed = ref(false)
const {
  controlled,
  id,
  open,
  trigger,
  onClose,
  onOpen,
  onShow,
  onHide,
  onBeforeShow,
  onBeforeHide,
} = inject(TOOLTIP_INJECTION_KEY, undefined)!
const transitionClass = computed(() => {
  return props.transition || `${ns.namespace.value}-fade-in-linear`
})
const persistentRef = computed(() => {
  // For testing, we would always want the content to be rendered
  // to the DOM, so we need to return true here.
  if (process.env.NODE_ENV === 'test')
    return true

  return props.persistent
})

onBeforeUnmount(() => {
  destroyed.value = true
})

const shouldRender = computed(() => {
  return unref(persistentRef) ? true : unref(open)
})

const shouldShow = computed(() => {
  return props.disabled ? false : unref(open)
})

const appendTo = computed(() => {
  return props.appendTo || selector.value
})

const contentStyle = computed(() => (props.style ?? {}) as any)

const ariaHidden = computed(() => !unref(open))

function onTransitionLeave() {
  onHide()
}

function stopWhenControlled() {
  if (unref(controlled))
    return true
}

const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
  if (props.enterable && unref(trigger) === 'hover')
    onOpen()
})

const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
  if (unref(trigger) === 'hover')
    onClose()
})

function onBeforeEnter() {
  contentRef.value?.updatePopper?.()
  onBeforeShow?.()
}

function onBeforeLeave() {
  onBeforeHide?.()
}

let stopHandle: ReturnType<typeof onClickOutside>

function onAfterShow() {
  onShow()
  stopHandle = onClickOutside(
    computed(() => {
      return contentRef.value?.popperContentRef
    }),
    () => {
      if (unref(controlled))
        return
      const $trigger = unref(trigger)
      if ($trigger !== 'hover')
        onClose()
    },
  )
}

function onBlur() {
  if (!props.virtualTriggering)
    onClose()
}

watch(
  () => unref(open),
  (val) => {
    if (!val)
      stopHandle?.()
  },
  {
    flush: 'post',
  },
)

watch(
  () => props.content,
  () => {
    contentRef.value?.updatePopper?.()
  },
)

defineExpose({
  /**
   * @description el-popper-content component instance
   */
  contentRef,
})
</script>

<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="transitionClass"
      @after-leave="onTransitionLeave"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterShow"
      @before-leave="onBeforeLeave"
    >
      <EhPopperContent
        v-if="shouldRender"
        v-show="shouldShow"
        :id="id"
        ref="contentRef"
        v-bind="$attrs"
        :aria-label="ariaLabel"
        :aria-hidden="ariaHidden"
        :boundaries-padding="boundariesPadding"
        :fallback-placements="fallbackPlacements"
        :gpu-acceleration="gpuAcceleration"
        :offset="offset"
        :placement="placement"
        :popper-options="popperOptions"
        :strategy="strategy"
        :effect="effect"
        :enterable="enterable"
        :pure="pure"
        :popper-class="popperClass"
        :popper-style="[popperStyle, contentStyle]"
        :reference-el="referenceEl"
        :trigger-target-el="triggerTargetEl"
        :visible="shouldShow"
        :z-index="zIndex"
        @mouseenter="onContentEnter"
        @mouseleave="onContentLeave"
        @blur="onBlur"
        @close="onClose"
      >
        <template v-if="!destroyed">
          <slot />
        </template>
      </EhPopperContent>
    </transition>
  </teleport>
</template>
