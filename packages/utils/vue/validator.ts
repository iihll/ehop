import { componentSizes, datePickTypes } from '@ehop/constants'
import type { ComponentSize, DatePickType } from '@ehop/constants'

export function isValidComponentSize(val: string): val is ComponentSize | '' {
  return ['', ...componentSizes].includes(val)
}

export function isValidDatePickType(val: string): val is DatePickType {
  return ([...datePickTypes] as string[]).includes(val)
}
