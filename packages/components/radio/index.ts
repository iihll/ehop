import { withInstall, withNoopInstall } from '@ehop/utils'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'

export const EhRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default EhRadio
export const EhRadioGroup = withNoopInstall(RadioGroup)
export const EhRadioButton = withNoopInstall(RadioButton)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
export * from './src/constants'
