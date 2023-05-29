import { buildProps, definePropType } from '@ehop/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

export const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType<(date: Date) => string>(Function),
  },
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault('date'),
} as const)

export type BasicDateTableProps = ExtractPropTypes<typeof basicDateTableProps>

export interface RangePickerEmits { minDate: Dayjs; maxDate: null }
export type DatePickerEmits = Dayjs
export type DatesPickerEmits = Dayjs[]
export interface WeekPickerEmits {
  year: number
  week: number
  value: string
  date: Dayjs
}

export type DateTableEmits =
  | RangePickerEmits
  | DatePickerEmits
  | DatesPickerEmits
  | WeekPickerEmits
