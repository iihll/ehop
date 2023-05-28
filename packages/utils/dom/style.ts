import type { CSSProperties } from 'vue'
import { isNumber, isObject, isString, isStringNumber } from '../types'
import { isClient } from '../browser'
import { camelize } from '../strings'
import { entriesOf, keysOf } from '../objects'
import { debugWarn } from '../error'

const SCOPE = 'utils/dom/style'

export function classNameToArray(cls = '') {
  return cls.split(' ').filter(item => !!item.trim())
}

export function hasClass(el: Element, cls: string): boolean {
  if (!el || !cls)
    return false
  if (cls.includes(' '))
    throw new Error('className should not contain space.')
  return el.classList.contains(cls)
}

export function addClass(el: Element, cls: string) {
  if (!el || !cls.trim())
    return
  el.classList.add(...classNameToArray(cls))
}

export function removeClass(el: Element, cls: string) {
  if (!el || !cls.trim())
    return
  el.classList.remove(...classNameToArray(cls))
}

export function getStyle(element: HTMLElement,
  styleName: keyof CSSProperties): string {
  if (!isClient || !element || !styleName)
    return ''

  let key = camelize(styleName)
  if (key === 'float')
    key = 'cssFloat'
  try {
    const style = (element.style as any)[key]
    if (style)
      return style
    const computed: any = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[key] : ''
  }
  catch {
    return (element.style as any)[key]
  }
}

export function setStyle(element: HTMLElement,
  styleName: CSSProperties | keyof CSSProperties,
  value?: string | number) {
  if (!element || !styleName)
    return

  if (isObject(styleName)) {
    entriesOf(styleName).forEach(([prop, value]) =>
      setStyle(element, prop, value),
    )
  }
  else {
    const key: any = camelize(styleName)
    element.style[key] = value as any
  }
}

export function removeStyle(element: HTMLElement,
  style: CSSProperties | keyof CSSProperties) {
  if (!element || !style)
    return

  if (isObject(style))
    keysOf(style).forEach(prop => removeStyle(element, prop))
  else
    setStyle(element, style, '')
}

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value)
    return ''
  if (isNumber(value) || isStringNumber(value))
    return `${value}${defaultUnit}`

  else if (isString(value))
    return value

  debugWarn(SCOPE, 'binding value must be a string or number')
}
