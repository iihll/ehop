import { withInstall, withNoopInstall } from '@ehop/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const EhSelect = withInstall(Select, {
  Option,
  OptionGroup,
})
export default EhSelect
export const EhOption = withNoopInstall(Option)
export const EhOptionGroup = withNoopInstall(OptionGroup)

export * from './src/token'
