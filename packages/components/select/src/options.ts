import { defineComponent } from 'vue'
import { isFunction, isString } from '@ehop/utils'
import type { Component, VNode, VNodeNormalizedChildren } from 'vue'

export default defineComponent({
  name: 'EhOptions',
  emits: ['update-options'],
  setup(_, { slots, emit }) {
    let cachedOptions: any[] = []

    function isSameOptions(a: any[], b: any[]) {
      if (a.length !== b.length) return false
      for (const [index] of a.entries()) {
        if (a[index] != b[index]) {
          return false
        }
      }
      return true
    }

    return () => {
      const children = slots.default?.()!
      const filteredOptions: any[] = []

      function filterOptions(children?: VNodeNormalizedChildren) {
        if (!Array.isArray(children)) return
        ;(children as VNode[]).forEach((item) => {
          const name = ((item?.type || {}) as Component)?.name

          if (name === 'EhOptionGroup') {
            filterOptions(
              !isString(item.children) &&
                !Array.isArray(item.children) &&
                isFunction(item.children?.default)
                ? item.children?.default()
                : item.children
            )
          } else if (name === 'EhOption') {
            filteredOptions.push(item.props?.label)
          } else if (Array.isArray(item.children)) {
            filterOptions(item.children)
          }
        })
      }

      if (children.length) {
        filterOptions(children![0]?.children)
      }

      if (!isSameOptions(filteredOptions, cachedOptions)) {
        cachedOptions = filteredOptions
        emit('update-options', filteredOptions)
      }

      return children
    }
  },
})
