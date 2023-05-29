<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import dayjs from 'dayjs'
import { EVENT_CODE } from '@ehop/constants'
import { useLocale, useNamespace } from '@ehop/hooks'
import { isUndefined } from '@ehop/utils'
import type { Dayjs } from 'dayjs'
import { panelTimePickerProps } from '../props/panel-time-picker'
import { useTimePanel } from '../composables/use-time-panel'
import {
  buildAvailableTimeSlotGetter,
  useOldValue,
} from '../composables/use-time-picker'
import TimeSpinner from './basic-time-spinner.vue'

const props = defineProps(panelTimePickerProps)
const emit = defineEmits(['pick', 'selectRange', 'setPickerOption'])

// Injections
const pickerBase = inject('EP_PICKER_BASE') as any
const {
  arrowControl,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  defaultValue,
} = pickerBase.props
const { getAvailableHours, getAvailableMinutes, getAvailableSeconds }
  = buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds)

const ns = useNamespace('time')
const { t, lang } = useLocale()
// data
const selectionRange = ref([0, 2])
const oldValue = useOldValue(props)
// computed
const transitionName = computed(() => {
  return isUndefined(props.actualVisible)
    ? `${ns.namespace.value}-zoom-in-top`
    : ''
})
const showSeconds = computed(() => {
  return props.format.includes('ss')
})
const amPmMode = computed(() => {
  if (props.format.includes('A'))
    return 'A'
  if (props.format.includes('a'))
    return 'a'
  return ''
})
// method
function isValidValue(_date: Dayjs) {
  const parsedDate = dayjs(_date).locale(lang.value)
  const result = getRangeAvailableTime(parsedDate)
  return parsedDate.isSame(result)
}
function handleCancel() {
  emit('pick', oldValue.value, false)
}
function handleConfirm(visible = false, first = false) {
  if (first)
    return
  emit('pick', props.parsedValue, visible)
}
function handleChange(_date: Dayjs) {
  // visible avoids edge cases, when use scrolls during panel closing animation
  if (!props.visible)
    return

  const result = getRangeAvailableTime(_date).millisecond(0)
  emit('pick', result, true)
}

function setSelectionRange(start: number, end: number) {
  emit('selectRange', start, end)
  selectionRange.value = [start, end]
}

function changeSelectionRange(step: number) {
  const list = [0, 3].concat(showSeconds.value ? [6] : [])
  const mapping = ['hours', 'minutes'].concat(
    showSeconds.value ? ['seconds'] : [],
  )
  const index = list.indexOf(selectionRange.value[0])
  const next = (index + step + list.length) % list.length
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  timePickerOptions.start_emitSelectRange(mapping[next])
}

function handleKeydown(event: KeyboardEvent) {
  const code = event.code

  const { left, right, up, down } = EVENT_CODE

  if ([left, right].includes(code)) {
    const step = code === left ? -1 : 1
    changeSelectionRange(step)
    event.preventDefault()
    return
  }

  if ([up, down].includes(code)) {
    const step = code === up ? -1 : 1
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    timePickerOptions.start_scrollDown(step)
    event.preventDefault()
  }
}

const { timePickerOptions, onSetOption, getAvailableTime } = useTimePanel({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds,
})

function getRangeAvailableTime(date: Dayjs) {
  return getAvailableTime(date, props.datetimeRole || '', true)
}

function parseUserInput(value: Dayjs) {
  if (!value)
    return null
  return dayjs(value, props.format).locale(lang.value)
}

function formatToString(value: Dayjs) {
  if (!value)
    return null
  return value.format(props.format)
}

function getDefaultValue() {
  return dayjs(defaultValue).locale(lang.value)
}

emit('setPickerOption', ['isValidValue', isValidValue])
emit('setPickerOption', ['formatToString', formatToString])
emit('setPickerOption', ['parseUserInput', parseUserInput])
emit('setPickerOption', ['handleKeydownInput', handleKeydown])
emit('setPickerOption', ['getRangeAvailableTime', getRangeAvailableTime])
emit('setPickerOption', ['getDefaultValue', getDefaultValue])
</script>

<template>
  <transition :name="transitionName">
    <div v-if="actualVisible || visible" :class="ns.b('panel')">
      <div :class="[ns.be('panel', 'content'), { 'has-seconds': showSeconds }]">
        <TimeSpinner
          :role="datetimeRole || 'start'"
          :arrow-control="arrowControl"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          :spinner-date="parsedValue!"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :disabled-seconds="disabledSeconds"
          @change="handleChange"
          @set-option="onSetOption"
          @selectRange="setSelectionRange"
        />
      </div>
      <div :class="ns.be('panel', 'footer')">
        <button
          type="button"
          class="cancel" :class="[ns.be('panel', 'btn')]"
          @click="handleCancel"
        >
          {{ t('eh.datepicker.cancel') }}
        </button>
        <button
          type="button"
          class="confirm" :class="[ns.be('panel', 'btn')]"
          @click="handleConfirm()"
        >
          {{ t('eh.datepicker.confirm') }}
        </button>
      </div>
    </div>
  </transition>
</template>
