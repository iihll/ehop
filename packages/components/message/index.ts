import { withInstallFunction } from '@ehop/utils'

import Message from './src/method'

export const EhMessage = withInstallFunction(Message, '$message')
export default EhMessage

export * from './src/message'
