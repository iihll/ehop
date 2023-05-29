import { buildProps } from '@ehop/utils'
import type { ExtractPropTypes } from 'vue'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

export const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault('month'),
})

export type BasicMonthTableProps = ExtractPropTypes<typeof basicMonthTableProps>
