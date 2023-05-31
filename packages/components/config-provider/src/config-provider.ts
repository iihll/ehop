import { defineComponent, renderSlot, watch } from 'vue'
import type { MessageConfigContext } from '@ehop/components/message'
import { provideGlobalConfig } from './use-global-config'
import { configProviderProps } from './config-provider-props'


export const messageConfig: MessageConfigContext = {}

const ConfigProvider = defineComponent({
  name: 'EhConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    watch(
      () => props.message,
      (val) => {
        Object.assign(messageConfig, val ?? {})
      },
      { immediate: true, deep: true },
    )
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>

export default ConfigProvider
