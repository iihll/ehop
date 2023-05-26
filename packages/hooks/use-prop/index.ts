import { computed, getCurrentInstance } from 'vue'
import type { ComputedRef } from 'vue'

export function useProp<T>(name: string): ComputedRef<T | undefined> {
  const vm = getCurrentInstance()
  return computed(() => (vm?.proxy?.$props as any)?.[name])
}
