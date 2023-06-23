import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type EhDropdownInjectionContext = {
  contentRef: Ref<HTMLElement | null>
  role: ComputedRef<string>
  triggerId: ComputedRef<string>
  isUsingKeyboard: Ref<boolean>
  onItemLeave: (e: PointerEvent) => void
  onItemEnter: (e: PointerEvent) => void
}

export const DROPDOWN_INJECTION_KEY: InjectionKey<EhDropdownInjectionContext> =
  Symbol('elDropdown')
