import type { ComputedRef, InjectionKey, WritableComputedRef } from 'vue'

export interface EhPaginationContext {
  currentPage?: WritableComputedRef<number>
  pageCount?: ComputedRef<number>
  disabled?: ComputedRef<boolean>
  changeEvent?: (val: number) => void
  handleSizeChange?: (val: number) => void
}

export const elPaginationKey: InjectionKey<EhPaginationContext> =
  Symbol('elPaginationKey')
