import { buildProps, definePropType } from '@ehop/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'
import { timePanelSharedProps } from './shared'

export const panelTimeRangeProps = buildProps({
  ...timePanelSharedProps,
  parsedValue: {
    type: definePropType<[Dayjs, Dayjs]>(Array),
  },
} as const)

export type PanelTimeRangeProps = ExtractPropTypes<typeof panelTimeRangeProps>
