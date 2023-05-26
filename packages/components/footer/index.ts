import { withInstall } from '@ehop/utils'

import Footer from './src/footer.vue'

export const EhFooter = withInstall(Footer)

export default EhFooter

export type FooterInstance = InstanceType<typeof Footer>
