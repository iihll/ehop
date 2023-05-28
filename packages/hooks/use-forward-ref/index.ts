import { provide } from 'vue'

import type { InjectionKey, ObjectDirective, Ref } from 'vue'

type ForwardRefSetter = <T>(el: T) => void

export interface ForwardRefInjectionContext {
  setForwardRef: ForwardRefSetter
}

export const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext> = Symbol('ehForwardRef')

export function useForwardRef<T>(forwardRef: Ref<T | null>) {
  const setForwardRef = (el: T) => {
    forwardRef.value = el
  }

  provide(FORWARD_REF_INJECTION_KEY, {
    // TODO setForwardRef type
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    setForwardRef,
  })
}

export function useForwardRefDirective(setForwardRef: ForwardRefSetter): ObjectDirective {
  return {
    mounted(el) {
      setForwardRef(el)
    },
    updated(el) {
      setForwardRef(el)
    },
    unmounted() {
      setForwardRef(null)
    },
  }
}
