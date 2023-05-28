import { onBeforeUnmount, onMounted, ref } from 'vue'
import { FOCUSOUT_PREVENTED, FOCUSOUT_PREVENTED_OPTS } from './tokens'

const focusReason = ref<'pointer' | 'keyboard'>()
const lastUserFocusTimestamp = ref<number>(0)
const lastAutomatedFocusTimestamp = ref<number>(0)
let focusReasonUserCount = 0

export interface FocusLayer {
  paused: boolean
  pause: () => void
  resume: () => void
}

export type FocusStack = FocusLayer[]

export function obtainAllFocusableElements(element: HTMLElement): HTMLElement[] {
  const nodes: HTMLElement[] = []
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (
      node: Element & {
        disabled: boolean
        hidden: boolean
        type: string
        tabIndex: number
      },
    ) => {
      const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden'
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP
      return node.tabIndex >= 0 || node === document.activeElement
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP
    },
  })
  while (walker.nextNode()) nodes.push(walker.currentNode as HTMLElement)

  return nodes
}

export function getVisibleElement(elements: HTMLElement[],
  container: HTMLElement) {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element
  }
}

export function isHidden(element: HTMLElement, container: HTMLElement) {
  if (process.env.NODE_ENV === 'test')
    return false
  if (getComputedStyle(element).visibility === 'hidden')
    return true

  while (element) {
    if (container && element === container)
      return false
    if (getComputedStyle(element).display === 'none')
      return true
    element = element.parentElement as HTMLElement
  }

  return false
}

export function getEdges(container: HTMLElement) {
  const focusable = obtainAllFocusableElements(container)
  const first = getVisibleElement(focusable, container)
  const last = getVisibleElement(focusable.reverse(), container)
  return [first, last]
}

function isSelectable(element: any): element is HTMLInputElement & { select: () => void } {
  return element instanceof HTMLInputElement && 'select' in element
}

export function tryFocus(element?: HTMLElement | { focus: () => void } | null,
  shouldSelect?: boolean) {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement
    element.focus({ preventScroll: true })
    lastAutomatedFocusTimestamp.value = window.performance.now()
    if (
      element !== prevFocusedElement
      && isSelectable(element)
      && shouldSelect
    )
      element.select()
  }
}

function removeFromStack<T>(list: T[], item: T) {
  const copy = [...list]

  const idx = list.indexOf(item)

  if (idx !== -1)
    copy.splice(idx, 1)

  return copy
}

function createFocusableStack() {
  let stack = [] as FocusStack

  const push = (layer: FocusLayer) => {
    const currentLayer = stack[0]

    if (currentLayer && layer !== currentLayer)
      currentLayer.pause()

    stack = removeFromStack(stack, layer)
    stack.unshift(layer)
  }

  const remove = (layer: FocusLayer) => {
    stack = removeFromStack(stack, layer)
    stack[0]?.resume?.()
  }

  return {
    push,
    remove,
  }
}

export function focusFirstDescendant(elements: HTMLElement[],
  shouldSelect = false) {
  const prevFocusedElement = document.activeElement
  for (const element of elements) {
    tryFocus(element, shouldSelect)
    if (document.activeElement !== prevFocusedElement)
      return
  }
}

export const focusableStack = createFocusableStack()

export function isFocusCausedByUserEvent(): boolean {
  return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value
}

function notifyFocusReasonPointer() {
  focusReason.value = 'pointer'
  lastUserFocusTimestamp.value = window.performance.now()
}

function notifyFocusReasonKeydown() {
  focusReason.value = 'keyboard'
  lastUserFocusTimestamp.value = window.performance.now()
}

export function useFocusReason(): {
  focusReason: typeof focusReason
  lastUserFocusTimestamp: typeof lastUserFocusTimestamp
  lastAutomatedFocusTimestamp: typeof lastAutomatedFocusTimestamp
} {
  onMounted(() => {
    if (focusReasonUserCount === 0) {
      document.addEventListener('mousedown', notifyFocusReasonPointer)
      document.addEventListener('touchstart', notifyFocusReasonPointer)
      document.addEventListener('keydown', notifyFocusReasonKeydown)
    }
    focusReasonUserCount++
  })

  onBeforeUnmount(() => {
    focusReasonUserCount--
    if (focusReasonUserCount <= 0) {
      document.removeEventListener('mousedown', notifyFocusReasonPointer)
      document.removeEventListener('touchstart', notifyFocusReasonPointer)
      document.removeEventListener('keydown', notifyFocusReasonKeydown)
    }
  })

  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp,
  }
}

export function createFocusOutPreventedEvent(detail: CustomEventInit['detail']) {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail,
  })
}
