import { buildProps, definePropType } from '@ehop/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'
import { panelSharedProps } from './shared'

export const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType<Dayjs | Dayjs[]>([Object, Array]),
  },
  visible: {
    type: Boolean,
  },
  format: {
    type: String,
    default: '',
  },
} as const)

export type PanelDatePickProps = ExtractPropTypes<typeof panelDatePickProps>
