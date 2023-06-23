import { withInstall } from '@ehop/utils'
import Avatar from './src/avatar.vue'

export const EhAvatar = withInstall(Avatar)
export default EhAvatar

export * from './src/avatar'
export type { AvatarInstance } from './src/instance'
