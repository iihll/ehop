import { onBeforeUnmount, onMounted } from 'vue'
import { isClient } from '@ehop/utils'
import { EVENT_CODE } from '@ehop/constants'

let registeredEscapeHandlers: ((e: KeyboardEvent) => void)[] = []

function cachedHandler(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach(registeredHandler =>
      registeredHandler(event),
    )
  }
}

export function useEscapeKeydown(handler: (e: KeyboardEvent) => void) {
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0)
      document.addEventListener('keydown', cachedHandler)

    if (isClient)
      registeredEscapeHandlers.push(handler)
  })

  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter(
      registeredHandler => registeredHandler !== handler,
    )
    if (registeredEscapeHandlers.length === 0) {
      if (isClient)
        document.removeEventListener('keydown', cachedHandler)
    }
  })
}
