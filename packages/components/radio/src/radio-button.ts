import { buildProps } from '@ehop/utils'
import type { ExtractPropTypes } from 'vue'
import { radioPropsBase } from './radio'
import type RadioButton from './radio-button.vue'

export const radioButtonProps = buildProps({
  ...radioPropsBase,
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: '',
  },
} as const)

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
export type RadioButtonInstance = InstanceType<typeof RadioButton>
