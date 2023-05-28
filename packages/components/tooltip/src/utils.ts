import { unref } from 'vue'
import { isArray } from '@ehop/utils'
import type { Arrayable } from '@ehop/utils'
import type { Ref } from 'vue'
import type { TooltipTriggerType } from './trigger'

export function isTriggerType(trigger: Arrayable<TooltipTriggerType>,
  type: TooltipTriggerType) {
  if (isArray(trigger))
    return trigger.includes(type)

  return trigger === type
}

export function whenTrigger(trigger: Ref<Arrayable<TooltipTriggerType>>,
  type: TooltipTriggerType,
  handler: (e: Event) => void) {
  return (e: Event) => {
    isTriggerType(unref(trigger), type) && handler(e)
  }
}
