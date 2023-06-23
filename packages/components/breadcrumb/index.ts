import { withInstall, withNoopInstall } from '@ehop/utils'

import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

export const EhBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem,
})
export const EhBreadcrumbItem = withNoopInstall(BreadcrumbItem)
export default EhBreadcrumb

export * from './src/breadcrumb'
export * from './src/breadcrumb-item'
export * from './src/constants'
export type {
  BreadcrumbInstance,
  BreadcrumbItemInstance,
} from './src/instances'
