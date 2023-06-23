import { withInstall } from '@ehop/utils'

import ConfigProvider from './src/config-provider'

export const EhConfigProvider = withInstall(ConfigProvider)
export default EhConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
