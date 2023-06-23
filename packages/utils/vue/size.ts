import { componentSizeMap } from '@ehop/constants'

import type { ComponentSize } from '@ehopts'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
