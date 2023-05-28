import { buildProps, iconPropType, isNumber, isValidComponentSize } from '@ehop/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@ehop/constants'
import { placements } from '@popperjs/core'
import type { Options } from '@popperjs/core'
import { useTooltipContentProps } from '@ehop/components/tooltip'
import { tagProps } from '@ehop/components/tag'
import { ArrowDown, CircleClose } from '@ehop/icons-vue'
import type Select from './select.vue'

export type ModelValue = string | number | boolean | object | {
  label?: string
}

export const selectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object] as PropType<ModelValue | ModelValue[]>,
    default: undefined,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  automaticDropdown: Boolean,
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  effect: {
    type: String as PropType<'light' | 'dark' | string>,
    default: 'light',
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: '',
  },
  popperOptions: {
    type: Object as PropType<Partial<Options>>,
    default: () => ({} as Partial<Options>),
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true,
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: false,
  },
  maxCollapseTags: {
    type: Number,
    default: 1,
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: iconPropType,
    default: CircleClose,
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
  suffixIcon: {
    type: iconPropType,
    default: ArrowDown,
  },

  tagType: { ...tagProps.type, default: 'info' },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  remoteShowSuffix: {
    type: Boolean,
    default: false,
  },
  suffixTransition: {
    type: Boolean,
    default: true,
  },
  placement: {
    type: String,
    values: placements,
    default: 'bottom-start',
  },
})
export type SelectProps = ExtractPropTypes<typeof selectProps>

export const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft,
  }: {
    scrollTop: number
    scrollLeft: number
  }) => [scrollTop, scrollLeft].every(isNumber),
}
export type ScrollbarEmits = typeof scrollbarEmits

export type SelectInstance = InstanceType<typeof Select>
