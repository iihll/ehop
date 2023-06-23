import { withInstall, withNoopInstall } from '@ehop/utils'

import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

export const EhDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu,
})
export default EhDropdown
export const EhDropdownItem = withNoopInstall(DropdownItem)
export const EhDropdownMenu = withNoopInstall(DropdownMenu)
export * from './src/dropdown'
export * from './src/instance'
export * from './src/tokens'
