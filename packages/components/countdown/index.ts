import { withInstall } from '@ehop/utils'
import Countdown from './src/countdown.vue'

export const EhCountdown = withInstall(Countdown)
export default EhCountdown

export * from './src/countdown'
