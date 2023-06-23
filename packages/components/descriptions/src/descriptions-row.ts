import { buildProps } from '@ehop/utils'

export const descriptionsRowProps = buildProps({
  row: {
    type: Array,
    default: () => [],
  },
} as const)
