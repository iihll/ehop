import { withInstall } from '@ehop/utils'

import Card from './src/card.vue'

export const EhCard = withInstall(Card)
export default EhCard

export * from './src/card'
export type { CardInstance } from './src/instance'
