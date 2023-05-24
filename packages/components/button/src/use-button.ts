import { computed, inject, ref, useSlots } from 'vue'
import type { SetupContext } from 'vue'
import type { ButtonEmits, ButtonProps } from './button'
import { buttonGroupContextKey } from './constants'

export function useButton(props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) {
  const buttonGroupContext = inject(buttonGroupContextKey, undefined)
  // TODO globalConfig
  const globalConfig = ref({ autoInsertSpace: false })
  const autoInsertSpace = computed(
    () => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false,
  )
  const slots = useSlots()

  const _type = computed(() => props.type || buttonGroupContext?.type || '')
  // add space between two characters in Chinese
  const shouldAddSpace = computed(() => {
    const defaultSlot = slots.default?.()
    if (autoInsertSpace.value && defaultSlot?.length === 1) {
      const slot = defaultSlot[0]
      if (slot?.type === Text) {
        const text = slot.children as string
        return /^\p{Unified_Ideograph}{2}$/u.test(text.trim())
      }
    }
    return false
  })

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt)
  }

  return {
    _type,
    shouldAddSpace,
    handleClick,
  }
}
