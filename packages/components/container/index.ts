import { withInstall } from '@ehop/utils'

import Container from './src/container.vue'

export const EhContainer = withInstall(Container)

export default EhContainer

export type ContainerInstance = InstanceType<typeof Container>
