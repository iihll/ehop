import { withInstall } from '@ehop/utils'

import Aside from './src/aside.vue'

export const EhAside = withInstall(Aside)

export default EhAside

export type AsideInstance = InstanceType<typeof Aside>
