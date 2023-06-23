import { withInstallFunction } from '@ehop/utils'

import Notify from './src/notify'

export const EhNotification = withInstallFunction(Notify, '$notify')
export default EhNotification

export * from './src/notification'
