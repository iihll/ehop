import { withInstall, withNoopInstall } from '@ehop/utils'

import Descriptions from './src/description.vue'
import DescriptionsItem from './src/description-item'

export const EhDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})

export const EhDescriptionsItem = withNoopInstall(DescriptionsItem)

export default EhDescriptions

export * from './src/description'
