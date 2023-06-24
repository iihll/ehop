import { ElLoading } from '@ehop/components/loading'
import { ElMessage } from '@ehop/components/message'
import { ElMessageBox } from '@ehop/components/message-box'
import { ElNotification } from '@ehop/components/notification'
import { ElPopoverDirective } from '@ehop/components/popover'
import { ElInfiniteScroll } from '@ehop/components/infinite-scroll'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
