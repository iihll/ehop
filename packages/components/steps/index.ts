import { withInstall, withNoopInstall } from '@ehop/utils'

import Steps from './src/steps.vue'
import Step from './src/item.vue'

export const EhSteps = withInstall(Steps, {
  Step,
})
export default EhSteps
export const EhStep = withNoopInstall(Step)

export * from './src/item'
export * from './src/steps'
