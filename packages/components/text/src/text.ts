import { buildProps } from '@ehop/utils'
import { componentSizes } from '@ehop/constants'
import type { ExtractPropTypes } from 'vue'
import type Text from './text.vue'

export const textProps = buildProps({
  /**
   * @description text type
   */
  type: {
    type: String,
    values: ['primary', 'success', 'info', 'warning', 'danger', ''],
    default: '',
  },
  /**
   * @description text size
   */
  size: {
    type: String,
    values: componentSizes,
    default: '',
  },
  /**
   * @description render ellipsis
   */
  truncated: {
    type: Boolean,
  },
  /**
   * @description custom element tag
   */
  tag: {
    type: String,
    default: 'span',
  },
} as const)
export type TextProps = ExtractPropTypes<typeof textProps>
export type TextInstance = InstanceType<typeof Text>
