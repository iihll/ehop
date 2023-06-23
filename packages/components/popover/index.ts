import { withInstall, withInstallDirective } from '@ehop/utils'

import Popover from './src/popover.vue'
import PopoverDirective, { VPopover } from './src/directive'

export const EhPopoverDirective = withInstallDirective(
  PopoverDirective,
  VPopover
)

export const EhPopover = withInstall(Popover, {
  directive: EhPopoverDirective,
})
export default EhPopover

export * from './src/popover'
