import { buildProps } from '@ehop/utils'
import type { ExtractPropTypes } from 'vue'
import { panelRangeSharedProps } from './shared'

export const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps,
} as const)

export const panelMonthRangeEmits = ['pick', 'set-picker-option']

export type PanelMonthRangeProps = ExtractPropTypes<typeof panelMonthRangeProps>
