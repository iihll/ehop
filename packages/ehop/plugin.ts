import { ElLoading } from '@ehopnts/loading'
import { ElMessage } from '@ehopnts/message'
import { ElMessageBox } from '@ehopnts/message-box'
import { ElNotification } from '@ehopnts/notification'
import { ElPopoverDirective } from '@ehopnts/popover'
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
