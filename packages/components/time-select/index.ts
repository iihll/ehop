import TimeSelect from './src/time-select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@ehop/utils'

TimeSelect.install = (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}

const _TimeSelect = TimeSelect as SFCWithInstall<typeof TimeSelect>

export default _TimeSelect
export const EhTimeSelect = _TimeSelect
