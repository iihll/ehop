import { withInstall, withNoopInstall } from '@ehop/utils'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

export const EhTabs = withInstall(Tabs, {
  TabPane,
})
export const EhTabPane = withNoopInstall(TabPane)
export default EhTabs

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
export * from './src/constants'
