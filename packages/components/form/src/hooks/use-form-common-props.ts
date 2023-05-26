import { computed, inject, ref, unref } from 'vue'
import { useGlobalSize, useProp } from '@ehop/hooks'

import type { ComponentSize } from '@ehop/constants'
import type { MaybeRef } from '@vueuse/core'
import { formContextKey, formItemContextKey } from '../constants'

export function useFormSize(fallback?: MaybeRef<ComponentSize | undefined>,
  ignore: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>> = {}) {
  const emptyRef = ref(undefined)

  const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size')
  const globalConfig = ignore.global ? emptyRef : useGlobalSize()
  const form = ignore.form
    ? { size: undefined }
    : inject(formContextKey, undefined)
  const formItem = ignore.formItem
    ? { size: undefined }
    : inject(formItemContextKey, undefined)

  return computed(
    (): ComponentSize =>
      size.value
      || unref(fallback)
      || formItem?.size
      || form?.size
      || globalConfig.value
      || '',
  )
}

export function useFormDisabled(fallback?: MaybeRef<boolean | undefined>) {
  const disabled = useProp<boolean>('disabled')
  const form = inject(formContextKey, undefined)
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false,
  )
}

// These exports are used for preventing breaking changes
export const useSize = useFormSize
export const useDisabled = useFormDisabled
