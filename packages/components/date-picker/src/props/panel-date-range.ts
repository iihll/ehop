import { buildProps } from '@ehop/utils'
import type { ExtractPropTypes } from 'vue'
import { panelRangeSharedProps, panelSharedProps } from './shared'

export const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
} as const)

export type PanelDateRangeProps = ExtractPropTypes<typeof panelDateRangeProps>
