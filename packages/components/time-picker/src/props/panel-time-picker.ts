import { buildProps, definePropType } from '@ehop/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'
import { timePanelSharedProps } from './shared'

export const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType<Dayjs>(Object),
  },
} as const)

export type PanelTimePickerProps = ExtractPropTypes<typeof panelTimePickerProps>
