<script lang="ts" setup>
import { inject, ref, toRef, unref } from 'vue'
import { EhPopperTrigger } from '@ehop/components/popper'
import { composeEventHandlers } from '@ehop/utils'
import { useNamespace } from '@ehop/hooks'
import type { OnlyChildExpose } from '@ehop/components/slot'
import { TOOLTIP_INJECTION_KEY } from './constants'
import { useTooltipTriggerProps } from './trigger'
import { whenTrigger } from './utils'

const props = defineProps(useTooltipTriggerProps)

defineOptions({
  name: 'EhTooltipTrigger',
})

const ns = useNamespace('tooltip')
const { controlled, id, open, onOpen, onClose, onToggle } = inject(
  TOOLTIP_INJECTION_KEY,
  undefined,
)!

const triggerRef = ref<OnlyChildExpose | null>(null)

function stopWhenControlledOrDisabled() {
  if (unref(controlled) || props.disabled)
    return true
}
const trigger = toRef(props, 'trigger')
const onMouseenter = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'hover', onOpen),
)
const onMouseleave = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'hover', onClose),
)
const onClick = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'click', (e) => {
    // distinguish left click
    if ((e as MouseEvent).button === 0)
      onToggle(e)
  }),
)

const onFocus = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'focus', onOpen),
)

const onBlur = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'focus', onClose),
)

const onContextMenu = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'contextmenu', (e: Event) => {
    e.preventDefault()
    onToggle(e)
  }),
)

const onKeydown = composeEventHandlers(
  stopWhenControlledOrDisabled,
  (e: KeyboardEvent) => {
    const { code } = e
    if (props.triggerKeys.includes(code)) {
      e.preventDefault()
      onToggle(e)
    }
  },
)

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>

<template>
  <EhPopperTrigger
    :id="id"
    :virtual-ref="virtualRef"
    :open="open"
    :virtual-triggering="virtualTriggering"
    :class="ns.e('trigger')"
    @blur="onBlur"
    @click="onClick"
    @contextmenu="onContextMenu"
    @focus="onFocus"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @keydown="onKeydown"
  >
    <slot />
  </EhPopperTrigger>
</template>
