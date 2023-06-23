import { withInstall, withNoopInstall } from '@ehop/utils'

import Menu from './src/menu'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu'

export const EhMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})
export default EhMenu
export const EhMenuItem = withNoopInstall(MenuItem)
export const EhMenuItemGroup = withNoopInstall(MenuItemGroup)
export const EhSubMenu = withNoopInstall(SubMenu)

export * from './src/menu'
export * from './src/menu-item'
export * from './src/menu-item-group'
export * from './src/sub-menu'
export * from './src/types'
