import { withInstall, withNoopInstall } from '@ehop/utils'

import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'

export const EhContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main,
})

export default EhContainer
export const EhAside = withNoopInstall(Aside)
export const EhFooter = withNoopInstall(Footer)
export const EhHeader = withNoopInstall(Header)
export const EhMain = withNoopInstall(Main)

export type ContainerInstance = InstanceType<typeof Container>
export type AsideInstance = InstanceType<typeof Aside>
export type FooterInstance = InstanceType<typeof Footer>
export type HeaderInstance = InstanceType<typeof Header>
export type MainInstance = InstanceType<typeof Main>
