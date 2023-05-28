import { provideGlobalConfig } from '@ehop/components/config-provider'
import { INSTALLED_KEY } from '@ehop/constants'
import type { App, Plugin } from 'vue'
import type { ConfigProviderContext } from '@ehop/components/config-provider'

export function makeInstaller(components: Plugin[] = []) {
  const install = (app: App, options?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY])
      return

    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))

    if (options)
      provideGlobalConfig(options, app, true)
  }

  return {
    install,
  }
}
