import { withInstall } from '@ehop/utils'

import Main from './src/main.vue'

export const EhMain = withInstall(Main)

export default EhMain

export type MainInstance = InstanceType<typeof Main>
