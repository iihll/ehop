import { componentSizeMap } from '@ehop/constants'

import type { ComponentSize } from '@ehop/constants'

export function getComponentSize(size?: ComponentSize) {
  return componentSizeMap[size || 'default']
}
