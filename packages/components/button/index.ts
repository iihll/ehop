import { withInstall } from '@ehop/utils'
import Button from './src/button.vue'

export const EhButton = withInstall(Button)
export default EhButton

export * from './src/button'
export type ButtonInstance = InstanceType<typeof Button>
