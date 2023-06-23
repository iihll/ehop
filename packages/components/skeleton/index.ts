import { withInstall, withNoopInstall } from '@ehop/utils'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

export const EhSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export const EhSkeletonItem = withNoopInstall(SkeletonItem)
export default EhSkeleton

export * from './src/skeleton'
export * from './src/skeleton-item'
