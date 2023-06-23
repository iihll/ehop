import { INSTALLED_KEY } from '@ehopts'
import { provideGlobalConfig } from '@ehop/components/config-provider'
import { version } from './version'

import type { App, Plugin } from '@vue/runtime-core'
import type { ConfigProviderContext } from '@ehopnts/config-provider'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
