import type { App } from 'vue'
import type { SFCWithInstall } from '@ehop/utils'
import DatePicker from './src/date-picker'

const _DatePicker = DatePicker as SFCWithInstall<typeof DatePicker>

_DatePicker.install = (app: App) => {
  app.component(_DatePicker.name, _DatePicker)
}

export default _DatePicker
export const EhDatePicker = _DatePicker
export * from './src/constants'
export * from './src/props/date-picker'
