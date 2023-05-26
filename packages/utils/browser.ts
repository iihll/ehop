import { isClient, isIOS } from '@vueuse/core'

export function isFirefox(): boolean {
  return isClient && /firefox/i.test(window.navigator.userAgent)
}

export { isClient, isIOS }
