import { computed, ref, useSlots } from 'vue'
import type { SetupContext } from 'vue'
import type { ButtonEmits, ButtonProps } from './button'

export function useButton(props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) {
  // TODO globalConfig
  const globalConfig = ref({ autoInsertSpace: false })
  const autoInsertSpace = computed(
    () => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false,
  )
  const slots = useSlots()

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
    shouldAddSpace,
    handleClick,
  }
}
