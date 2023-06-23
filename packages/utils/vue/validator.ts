import { componentSizes, datePickTypes } from '@ehop/constants'
import type { ComponentSize, DatePickType } from '@ehopts'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)
