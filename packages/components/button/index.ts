import { withInstall, withNoopInstall } from '@ehop/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const EhButton = withInstall(Button, {
  ButtonGroup,
})
export const EhButtonGroup = withNoopInstall(ButtonGroup)
export default EhButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
