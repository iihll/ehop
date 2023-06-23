import EhIcon from '@ehop/components/icon'
import { SortDown, SortUp } from '@ehop/icons-vue'
import { SortOrder } from '../constants'

import type { FunctionalComponent } from 'vue'

export type SortIconProps = {
  sortOrder: SortOrder
  class?: JSX.IntrinsicAttributes['class']
}

const SortIcon: FunctionalComponent<SortIconProps> = (props) => {
  const { sortOrder } = props

  return (
    <EhIcon size={14} class={props.class}>
      {sortOrder === SortOrder.ASC ? <SortUp /> : <SortDown />}
    </EhIcon>
  )
}

export default SortIcon
