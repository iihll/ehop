import { tryOnScopeDispose } from '@vueuse/core'

export function useTimeout() {
  let timeoutHandle: number

  const cancelTimeout = () => window.clearTimeout(timeoutHandle)
  const registerTimeout = (fn: (...args: any[]) => any, delay: number) => {
    cancelTimeout()
    timeoutHandle = window.setTimeout(fn, delay)
  }

  tryOnScopeDispose(() => cancelTimeout())

  return {
    registerTimeout,
    cancelTimeout,
  }
}
