import { defineComponent, inject } from 'vue'
import { useNamespace } from '@ehop/hooks'
import { ROOT_PICKER_INJECTION_KEY } from '../constants'
import { basicCellProps } from '../props/basic-cell'

export default defineComponent({
  name: 'EhDatePickerCell',
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace('date-table-cell')
    const { slots } = inject(ROOT_PICKER_INJECTION_KEY)!
    return () => {
      const { cell } = props
      if (slots.default) {
        const list = slots.default(cell).filter((item) => {
          return (
            item.patchFlag !== -2 && item.type.toString() !== 'Symbol(Comment)'
          )
        })
        if (list.length) {
          return list
        }
      }

      return (
        <div class={ns.b()}>
          <span class={ns.e('text')}>{cell?.text}</span>
        </div>
      )
    }
  },
})
