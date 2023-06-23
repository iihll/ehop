import {
  buildProps,
  definePropType,
  iconPropType,
  isBoolean,
  isNumber,
  isString,
  isValidComponentSize,
} from '@ehop/utils'
import { CHANGE_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '@ehop/constants'
import type { ComponentSize } from '@ehop/constants'
import type Switch from './switch.vue'
import type { ExtractPropTypes, PropType } from 'vue'

export const switchProps = buildProps({
  /**
   * @description binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type
   */
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  /**
   * @description whether Switch is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether Switch is in loading state
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * @description size of Switch
   */
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  /**
   * @description width of Switch
   */
  width: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description whether icon or text is displayed inside dot, only the first character will be rendered for text
   */
  inlinePrompt: {
    type: Boolean,
    default: false,
  },
  /**
   * @description component of the icon displayed when in `on` state, overrides `active-text`
   */
  activeIcon: {
    type: iconPropType,
  },
  /**
   * @description component of the icon displayed when in `off` state, overrides `inactive-text`
   */
  inactiveIcon: {
    type: iconPropType,
  },
  /**
   * @description text displayed when in `on` state
   */
  activeText: {
    type: String,
    default: '',
  },
  /**
   * @description text displayed when in `off` state
   */
  inactiveText: {
    type: String,
    default: '',
  },
  /**
   * @description switch value when in `on` state
   */
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  /**
   * @description switch value when in `off` state
   */
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  /**
   * @deprecated background color when in `on` state ( deprecated, use CSS var `--eh-switch-on-color` instead )
   */
  activeColor: {
    type: String,
    default: '',
  },
  /**
   * @deprecated background color when in `off` state ( deprecated, use CSS var `--eh-switch-off-color` instead )
   */
  inactiveColor: {
    type: String,
    default: '',
  },
  /**
   * @deprecated border color of the switch ( deprecated, use CSS var `--eh-switch-border-color` instead )
   */
  borderColor: {
    type: String,
    default: '',
  },
  /**
   * @description input name of Switch
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching
   */
  beforeChange: {
    type: definePropType<() => Promise<boolean> | boolean>(Function),
  },
  /**
   * @description id for input
   */
  id: String,
  /**
   * @description tabindex for input
   */
  tabindex: {
    type: [String, Number],
  },
  /**
   * @deprecated binding value ( deprecated, use `model-value / v-model` instead )
   */
  value: {
    type: [Boolean, String, Number],
    default: false,
  },
} as const)

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
}
export type SwitchEmits = typeof switchEmits

export type SwitchInstance = InstanceType<typeof Switch>
