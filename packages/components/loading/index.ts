import { Loading } from './src/service'
import { vLoading } from './src/directive'

import type { App } from 'vue'

// installer and everything in all
export const EhLoading = {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default EhLoading
export { vLoading, vLoading as EhLoadingDirective, Loading as EhLoadingService }

export * from './src/types'
