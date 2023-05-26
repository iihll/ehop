import { withInstall } from '@ehop/utils'

import Header from './src/header.vue'

export const EhHeader = withInstall(Header)

export default EhHeader

export type HeaderInstance = InstanceType<typeof Header>
