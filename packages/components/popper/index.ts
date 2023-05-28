import { withInstall } from '@ehop/utils'
import Popper from './src/popper.vue'

import EhPopperArrow from './src/arrow.vue'
import EhPopperTrigger from './src/trigger.vue'
import EhPopperContent from './src/content.vue'

export { EhPopperArrow, EhPopperTrigger, EhPopperContent }

export const EhPopper = withInstall(Popper)
export default EhPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'
export * from './src/constants'

export type { Placement, Options } from '@popperjs/core'
