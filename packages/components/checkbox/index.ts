import { withInstall, withNoopInstall } from '@ehop/utils'

import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const EhCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default EhCheckbox

export const EhCheckboxButton = withNoopInstall(CheckboxButton)
export const EhCheckboxGroup = withNoopInstall(CheckboxGroup)

export * from './src/checkbox-group'
export * from './src/checkbox'
export * from './src/constants'
