import { buildProps } from '@ehop/utils'
import type { ExtractPropTypes } from 'vue'
import { datePickerSharedProps } from './shared'

const { date, disabledDate, parsedValue } = datePickerSharedProps

export const basicYearTableProps = buildProps({
  date,
  disabledDate,
  parsedValue,
})

export type BasicYearTableProps = ExtractPropTypes<typeof basicYearTableProps>
