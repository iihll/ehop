import { buildProps } from '@ehop/utils'
import { createModelToggleComposable } from '@ehop/hooks'
import { popperArrowProps, popperProps } from '@ehop/components/popper'
import type { ExtractPropTypes } from 'vue'
import { useTooltipContentProps } from './content'
import { useTooltipTriggerProps } from './trigger'
import type Tooltip from './tooltip.vue'

export const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle,
} = createModelToggleComposable('visible' as const)

export const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
})

export const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  'beforeShow',
  'beforeHide',
  'show',
  'hide',
  'open',
  'close',
]

export type ElTooltipProps = ExtractPropTypes<typeof useTooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>
