import { withInstall } from '@ehop/utils'

import Alert from './src/alert.vue'

export const EhAlert = withInstall(Alert)
export default EhAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'
