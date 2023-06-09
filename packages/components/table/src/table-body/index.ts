/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  onUnmounted,
  watch,
} from 'vue'
import { addClass, isClient, removeClass } from '@ehop/utils'
import { useNamespace } from '@ehop/hooks'
import type { VNode } from 'vue'
import useLayoutObserver from '../layout-observer'
import { removePopper } from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import useRender from './render-helper'
import defaultProps from './defaults'

export default defineComponent({
  name: 'EhTableBody',
  props: defaultProps,
  setup(props) {
    const instance = getCurrentInstance()
    const parent = inject(TABLE_INJECTION_KEY)
    const ns = useNamespace('table')
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender(props)
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent!)

    watch(props.store.states.hoverRow, (newVal: any, oldVal: any) => {
      if (!props.store.states.isComplex.value || !isClient)
        return
      let raf = window.requestAnimationFrame
      if (!raf)
        raf = fn => window.setTimeout(fn, 16)

      raf(() => {
        // just get first level children; fix #9723
        const el = instance?.vnode.el as HTMLElement
        const rows = Array.from(el?.children || []).filter(e =>
          e?.classList.contains(`${ns.e('row')}`),
        )
        const oldRow = rows[oldVal]
        const newRow = rows[newVal]
        if (oldRow)
          removeClass(oldRow, 'hover-row')

        if (newRow)
          addClass(newRow, 'hover-row')
      })
    })

    onUnmounted(() => {
      removePopper?.()
    })

    return {
      ns,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger,
    }
  },
  render() {
    const { wrappedRowRender, store } = this
    const data = store.states.data.value || []
    console.log('data', data.reduce((acc: VNode[], row) => {
      return acc.concat(wrappedRowRender(row, acc.length))
    }, []))
    return h('tbody', {}, [
      data.reduce((acc: VNode[], row) => {
        return acc.concat(wrappedRowRender(row, acc.length))
      }, []),
    ])
  },
})
