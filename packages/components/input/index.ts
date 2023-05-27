import { withInstall } from '@ehop/utils'

import Input from './src/input.vue'

export const EhInput = withInstall(Input)
export default EhInput

export * from './src/input'

export type InputInstance = InstanceType<typeof Input>
