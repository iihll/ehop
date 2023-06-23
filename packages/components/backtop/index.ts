import { withInstall } from '@ehop/utils'

import Backtop from './src/backtop.vue'

export const EhBacktop = withInstall(Backtop)
export default EhBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'
