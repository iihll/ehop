import type { Ref } from 'vue'

export function useFocus(el: Ref<{
  focus: () => void
} | null>) {
  return {
    focus: () => {
      el.value?.focus?.()
    },
  }
}
