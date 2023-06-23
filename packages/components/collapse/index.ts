import { withInstall, withNoopInstall } from '@ehop/utils'

import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const EhCollapse = withInstall(Collapse, {
  CollapseItem,
})
export default EhCollapse
export const EhCollapseItem = withNoopInstall(CollapseItem)

export * from './src/collapse'
export * from './src/collapse-item'
export * from './src/constants'
export type { CollapseInstance, CollapseItemInstance } from './src/instance'
