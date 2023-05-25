import { EhButton } from '@ehop/components/button'
import { EhCol } from '@ehop/components/col'
import { EhConfigProvider } from '@ehop/components/config-provider'
import {
  EhAside,
  EhContainer,
  EhFooter,
  EhHeader,
  EhMain,
} from '@ehop/components/container'
import { EhIcon } from '@ehop/components/icon'
import { EhLink } from '@ehop/components/link'
import { EhRow } from '@ehop/components/row'

import type { Plugin } from 'vue'

export default [
  EhButton,
  EhCol,
  EhConfigProvider,
  EhAside,
  EhContainer,
  EhFooter,
  EhHeader,
  EhMain,
  EhIcon,
  EhLink,
  EhRow,
] satisfies Plugin[]
