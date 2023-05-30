import { computed, getCurrentInstance, inject, unref } from 'vue'
import { debugWarn, isClient } from '@ehop/utils'

import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import { useGetDerivedNamespace } from '../use-namespace'

export interface EhIdInjectionContext {
  prefix: number
  current: number
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<EhIdInjectionContext>
  = Symbol('elIdInjection')

export function useIdInjection(): EhIdInjectionContext {
  return getCurrentInstance()
    ? inject(ID_INJECTION_KEY, defaultIdInjection)
    : defaultIdInjection
}

export function useId(deterministicId?: MaybeRef<string>): Ref<string> {
  const idInjection = useIdInjection()
  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn(
      'IdInjection',
      `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`,
    )
  }

  const namespace = useGetDerivedNamespace()
  const idRef = computed(
    () =>
      unref(deterministicId)
      || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`,
  )

  return idRef
}
