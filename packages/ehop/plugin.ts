import { EhLoading } from '@ehop/components/loading'
import { EhMessage } from '@ehop/components/message'
import { EhMessageBox } from '@ehop/components/message-box'
import { EhNotification } from '@ehop/components/notification'
import { EhPopoverDirective } from '@ehop/components/popover'
import { EhInfiniteScroll } from '@ehop/components/infinite-scroll'

import type { Plugin } from 'vue'

export default [
  EhInfiniteScroll,
  EhLoading,
  EhMessage,
  EhMessageBox,
  EhNotification,
  EhPopoverDirective,
] as Plugin[]
