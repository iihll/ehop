import { withInstall } from '@ehop/utils'

import Badge from './src/badge.vue'

export const EhBadge = withInstall(Badge)
export default EhBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
