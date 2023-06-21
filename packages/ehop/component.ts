import { EhButton } from '@ehop/components/button'
import { EhCol } from '@ehop/components/col'
import { EhConfigProvider } from '@ehop/components/config-provider'
import { EhContainer } from '@ehop/components/container'
import { EhAside } from '@ehop/components/aside'
import { EhFooter } from '@ehop/components/footer'
import { EhHeader } from '@ehop/components/header'
import { EhMain } from '@ehop/components/main'
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
] as Plugin[]
