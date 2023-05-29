<!-- eslint-disable @typescript-eslint/no-use-before-define -->
<script lang="ts" setup>
import { computed, inject, ref, toRef, unref } from 'vue'
import dayjs from 'dayjs'
import { ClickOutside as vClickoutside } from '@ehop/directives'
import { isArray } from '@ehop/utils'
import { useLocale } from '@ehop/hooks'
import EhButton from '@ehop/components/button'
import EhInput from '@ehop/components/input'
import {
  TimePickPanel,
  extractDateFormat,
  extractTimeFormat,
} from '@ehop/components/time-picker'
import EhIcon from '@ehop/components/icon'
import {
  ArrowLeft,
  ArrowRight,
  DArrowLeft,
  DArrowRight,
} from '@ehop/icons-vue'
import type { Dayjs } from 'dayjs'
import { panelDateRangeProps } from '../props/panel-date-range'
import { useRangePicker } from '../composables/use-range-picker'
import { getDefaultValue, isValidRange } from '../utils'
import DateTable from './basic-date-table.vue'

type ChangeType = 'min' | 'max'
interface UserInput {
  min: string | null
  max: string | null
}

const props = defineProps(panelDateRangeProps)
const emit = defineEmits([
  'pick',
  'setPickerOption',
  'calendarChange',
  'panelChange',
])

const unit = 'month'
// FIXME: fix the type for ep picker
const pickerBase = inject('EP_PICKER_BASE') as any
const {
  disabledDate,
  cellClassName,
  format,
  defaultTime,
  arrowControl,
  clearable,
} = pickerBase.props
const shortcuts = toRef(pickerBase.props, 'shortcuts')
const defaultValue = toRef(pickerBase.props, 'defaultValue')
const { lang } = useLocale()
const leftDate = ref<Dayjs>(dayjs().locale(lang.value))
const rightDate = ref<Dayjs>(dayjs().locale(lang.value).add(1, unit))

const {
  minDate,
  maxDate,
  rangeState,
  ppNs,
  drpNs,

  handleChangeRange,
  handleRangeConfirm,
  handleShortcutClick,
  onSelect,
  t,
} = useRangePicker(props, {
  defaultValue,
  leftDate,
  rightDate,
  unit,
  onParsedValueChanged,
})

const dateUserInput = ref<UserInput>({
  min: null,
  max: null,
})

const timeUserInput = ref<UserInput>({
  min: null,
  max: null,
})

const leftLabel = computed(() => {
  return `${leftDate.value.year()} ${t('eh.datepicker.year')} ${t(
    `eh.datepicker.month${leftDate.value.month() + 1}`,
  )}`
})

const rightLabel = computed(() => {
  return `${rightDate.value.year()} ${t('eh.datepicker.year')} ${t(
    `eh.datepicker.month${rightDate.value.month() + 1}`,
  )}`
})

const leftYear = computed(() => {
  return leftDate.value.year()
})

const leftMonth = computed(() => {
  return leftDate.value.month()
})

const rightYear = computed(() => {
  return rightDate.value.year()
})

const rightMonth = computed(() => {
  return rightDate.value.month()
})

const hasShortcuts = computed(() => !!shortcuts.value.length)

const minVisibleDate = computed(() => {
  if (dateUserInput.value.min !== null)
    return dateUserInput.value.min
  if (minDate.value)
    return minDate.value.format(dateFormat.value)
  return ''
})

const maxVisibleDate = computed(() => {
  if (dateUserInput.value.max !== null)
    return dateUserInput.value.max
  if (maxDate.value || minDate.value)
    return (maxDate.value || minDate.value)!.format(dateFormat.value)
  return ''
})

const minVisibleTime = computed(() => {
  if (timeUserInput.value.min !== null)
    return timeUserInput.value.min
  if (minDate.value)
    return minDate.value.format(timeFormat.value)
  return ''
})

const maxVisibleTime = computed(() => {
  if (timeUserInput.value.max !== null)
    return timeUserInput.value.max
  if (maxDate.value || minDate.value)
    return (maxDate.value || minDate.value)!.format(timeFormat.value)
  return ''
})

const timeFormat = computed(() => {
  return extractTimeFormat(format)
})

const dateFormat = computed(() => {
  return extractDateFormat(format)
})

function leftPrevYear() {
  leftDate.value = leftDate.value.subtract(1, 'year')
  if (!props.unlinkPanels)
    rightDate.value = leftDate.value.add(1, 'month')

  handlePanelChange('year')
}

function leftPrevMonth() {
  leftDate.value = leftDate.value.subtract(1, 'month')
  if (!props.unlinkPanels)
    rightDate.value = leftDate.value.add(1, 'month')

  handlePanelChange('month')
}

function rightNextYear() {
  if (!props.unlinkPanels) {
    leftDate.value = leftDate.value.add(1, 'year')
    rightDate.value = leftDate.value.add(1, 'month')
  }
  else {
    rightDate.value = rightDate.value.add(1, 'year')
  }
  handlePanelChange('year')
}

function rightNextMonth() {
  if (!props.unlinkPanels) {
    leftDate.value = leftDate.value.add(1, 'month')
    rightDate.value = leftDate.value.add(1, 'month')
  }
  else {
    rightDate.value = rightDate.value.add(1, 'month')
  }
  handlePanelChange('month')
}

function leftNextYear() {
  leftDate.value = leftDate.value.add(1, 'year')
  handlePanelChange('year')
}

function leftNextMonth() {
  leftDate.value = leftDate.value.add(1, 'month')
  handlePanelChange('month')
}

function rightPrevYear() {
  rightDate.value = rightDate.value.subtract(1, 'year')
  handlePanelChange('year')
}

function rightPrevMonth() {
  rightDate.value = rightDate.value.subtract(1, 'month')
  handlePanelChange('month')
}

function handlePanelChange(mode: 'month' | 'year') {
  emit(
    'panelChange',
    [leftDate.value.toDate(), rightDate.value.toDate()],
    mode,
  )
}

const enableMonthArrow = computed(() => {
  const nextMonth = (leftMonth.value + 1) % 12
  const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0
  return (
    props.unlinkPanels
    && new Date(leftYear.value + yearOffset, nextMonth)
      < new Date(rightYear.value, rightMonth.value)
  )
})

const enableYearArrow = computed(() => {
  return (
    props.unlinkPanels
    && rightYear.value * 12
      + rightMonth.value
      - (leftYear.value * 12 + leftMonth.value + 1)
      >= 12
  )
})

const btnDisabled = computed(() => {
  return !(
    minDate.value
    && maxDate.value
    && !rangeState.value.selecting
    && isValidRange([minDate.value, maxDate.value])
  )
})

const showTime = computed(
  () => props.type === 'datetime' || props.type === 'datetimerange',
)

function formatEmit(emitDayjs: Dayjs | null, index?: number) {
  if (!emitDayjs)
    return
  if (defaultTime) {
    const defaultTimeD = dayjs(
      defaultTime[index as number] || defaultTime,
    ).locale(lang.value)
    return defaultTimeD
      .year(emitDayjs.year())
      .month(emitDayjs.month())
      .date(emitDayjs.date())
  }
  return emitDayjs
}

function handleRangePick(val: {
  minDate: Dayjs
  maxDate: Dayjs | null
},
close = true) {
  const min_ = val.minDate
  const max_ = val.maxDate
  const minDate_ = formatEmit(min_, 0)
  const maxDate_ = formatEmit(max_, 1)

  if (maxDate.value === maxDate_ && minDate.value === minDate_)
    return

  emit('calendarChange', [min_.toDate(), max_ && max_.toDate()])
  maxDate.value = maxDate_
  minDate.value = minDate_

  if (!close || showTime.value)
    return
  handleRangeConfirm()
}

const minTimePickerVisible = ref(false)
const maxTimePickerVisible = ref(false)

function handleMinTimeClose() {
  minTimePickerVisible.value = false
}

function handleMaxTimeClose() {
  maxTimePickerVisible.value = false
}

function handleDateInput(value: string | null, type: ChangeType) {
  dateUserInput.value[type] = value
  const parsedValueD = dayjs(value, dateFormat.value).locale(lang.value)

  if (parsedValueD.isValid()) {
    if (disabledDate && disabledDate(parsedValueD.toDate()))
      return

    if (type === 'min') {
      leftDate.value = parsedValueD
      minDate.value = (minDate.value || leftDate.value)
        .year(parsedValueD.year())
        .month(parsedValueD.month())
        .date(parsedValueD.date())
      if (!props.unlinkPanels) {
        rightDate.value = parsedValueD.add(1, 'month')
        maxDate.value = minDate.value.add(1, 'month')
      }
    }
    else {
      rightDate.value = parsedValueD
      maxDate.value = (maxDate.value || rightDate.value)
        .year(parsedValueD.year())
        .month(parsedValueD.month())
        .date(parsedValueD.date())
      if (!props.unlinkPanels) {
        leftDate.value = parsedValueD.subtract(1, 'month')
        minDate.value = maxDate.value.subtract(1, 'month')
      }
    }
  }
}

function handleDateChange(_: unknown, type: ChangeType) {
  dateUserInput.value[type] = null
}

function handleTimeInput(value: string | null, type: ChangeType) {
  timeUserInput.value[type] = value
  const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value)

  if (parsedValueD.isValid()) {
    if (type === 'min') {
      minTimePickerVisible.value = true
      minDate.value = (minDate.value || leftDate.value)
        .hour(parsedValueD.hour())
        .minute(parsedValueD.minute())
        .second(parsedValueD.second())
      if (!maxDate.value || maxDate.value.isBefore(minDate.value))
        maxDate.value = minDate.value
    }
    else {
      maxTimePickerVisible.value = true
      maxDate.value = (maxDate.value || rightDate.value)
        .hour(parsedValueD.hour())
        .minute(parsedValueD.minute())
        .second(parsedValueD.second())
      rightDate.value = maxDate.value
      if (maxDate.value && maxDate.value.isBefore(minDate.value))
        minDate.value = maxDate.value
    }
  }
}

function handleTimeChange(value: string | null, type: ChangeType) {
  timeUserInput.value[type] = null
  if (type === 'min') {
    leftDate.value = minDate.value!
    minTimePickerVisible.value = false
  }
  else {
    rightDate.value = maxDate.value!
    maxTimePickerVisible.value = false
  }
}

function handleMinTimePick(value: Dayjs, visible: boolean, first: boolean) {
  if (timeUserInput.value.min)
    return
  if (value) {
    leftDate.value = value
    minDate.value = (minDate.value || leftDate.value)
      .hour(value.hour())
      .minute(value.minute())
      .second(value.second())
  }

  if (!first)
    minTimePickerVisible.value = visible

  if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
    maxDate.value = minDate.value
    rightDate.value = value
  }
}

function handleMaxTimePick(value: Dayjs | null,
  visible: boolean,
  first: boolean) {
  if (timeUserInput.value.max)
    return
  if (value) {
    rightDate.value = value
    maxDate.value = (maxDate.value || rightDate.value)
      .hour(value.hour())
      .minute(value.minute())
      .second(value.second())
  }

  if (!first)
    maxTimePickerVisible.value = visible

  if (maxDate.value && maxDate.value.isBefore(minDate.value))
    minDate.value = maxDate.value
}

function handleClear() {
  leftDate.value = getDefaultValue(unref(defaultValue), {
    lang: unref(lang),
    unit: 'month',
    unlinkPanels: props.unlinkPanels,
  })[0]
  rightDate.value = leftDate.value.add(1, 'month')
  emit('pick', null)
}

function formatToString(value: Dayjs | Dayjs[]) {
  return isArray(value)
    ? value.map(_ => _.format(format))
    : value.format(format)
}

function parseUserInput(value: Dayjs | Dayjs[]) {
  return isArray(value)
    ? value.map(_ => dayjs(_, format).locale(lang.value))
    : dayjs(value, format).locale(lang.value)
}

function onParsedValueChanged(
  minDate: Dayjs | undefined,
  maxDate: Dayjs | undefined,
) {
  if (props.unlinkPanels && maxDate) {
    const minDateYear = minDate?.year() || 0
    const minDateMonth = minDate?.month() || 0
    const maxDateYear = maxDate.year()
    const maxDateMonth = maxDate.month()
    rightDate.value
      = minDateYear === maxDateYear && minDateMonth === maxDateMonth
        ? maxDate.add(1, unit)
        : maxDate
  }
  else {
    rightDate.value = leftDate.value.add(1, unit)
    if (maxDate) {
      rightDate.value = rightDate.value
        .hour(maxDate.hour())
        .minute(maxDate.minute())
        .second(maxDate.second())
    }
  }
}

emit('setPickerOption', ['isValidValue', isValidRange])
emit('setPickerOption', ['parseUserInput', parseUserInput])
emit('setPickerOption', ['formatToString', formatToString])
emit('setPickerOption', ['handleClear', handleClear])
</script>

<template>
  <div
    :class="[
      ppNs.b(),
      drpNs.b(),
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime,
      },
    ]"
  >
    <div :class="ppNs.e('body-wrapper')">
      <slot name="sidebar" :class="ppNs.e('sidebar')" />
      <div v-if="hasShortcuts" :class="ppNs.e('sidebar')">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          :class="ppNs.e('shortcut')"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div :class="ppNs.e('body')">
        <div v-if="showTime" :class="drpNs.e('time-header')">
          <span :class="drpNs.e('editors-wrap')">
            <span :class="drpNs.e('time-picker-wrap')">
              <EhInput
                size="small"
                :disabled="rangeState.selecting"
                :placeholder="t('eh.datepicker.startDate')"
                :class="drpNs.e('editor')"
                :model-value="minVisibleDate"
                :validate-event="false"
                @input="(val) => handleDateInput(val, 'min')"
                @change="(val) => handleDateChange(val, 'min')"
              />
            </span>
            <span
              v-clickoutside="handleMinTimeClose"
              :class="drpNs.e('time-picker-wrap')"
            >
              <EhInput
                size="small"
                :class="drpNs.e('editor')"
                :disabled="rangeState.selecting"
                :placeholder="t('eh.datepicker.startTime')"
                :model-value="minVisibleTime"
                :validate-event="false"
                @focus="minTimePickerVisible = true"
                @input="(val) => handleTimeInput(val, 'min')"
                @change="(val) => handleTimeChange(val, 'min')"
              />
              <TimePickPanel
                :visible="minTimePickerVisible"
                :format="timeFormat"
                datetime-role="start"
                :time-arrow-control="arrowControl"
                :parsed-value="leftDate"
                @pick="handleMinTimePick"
              />
            </span>
          </span>
          <span>
            <EhIcon><ArrowRight /></EhIcon>
          </span>
          <span :class="drpNs.e('editors-wrap')" class="is-right">
            <span :class="drpNs.e('time-picker-wrap')">
              <EhInput
                size="small"
                :class="drpNs.e('editor')"
                :disabled="rangeState.selecting"
                :placeholder="t('eh.datepicker.endDate')"
                :model-value="maxVisibleDate"
                :readonly="!minDate"
                :validate-event="false"
                @input="(val) => handleDateInput(val, 'max')"
                @change="(val) => handleDateChange(val, 'max')"
              />
            </span>
            <span
              v-clickoutside="handleMaxTimeClose"
              :class="drpNs.e('time-picker-wrap')"
            >
              <EhInput
                size="small"
                :class="drpNs.e('editor')"
                :disabled="rangeState.selecting"
                :placeholder="t('eh.datepicker.endTime')"
                :model-value="maxVisibleTime"
                :readonly="!minDate"
                :validate-event="false"
                @focus="minDate && (maxTimePickerVisible = true)"
                @input="(val) => handleTimeInput(val, 'max')"
                @change="(val) => handleTimeChange(val, 'max')"
              />
              <TimePickPanel
                datetime-role="end"
                :visible="maxTimePickerVisible"
                :format="timeFormat"
                :time-arrow-control="arrowControl"
                :parsed-value="rightDate"
                @pick="handleMaxTimePick"
              />
            </span>
          </span>
        </div>
        <div :class="[ppNs.e('content'), drpNs.e('content')]" class="is-left">
          <div :class="drpNs.e('header')">
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="d-arrow-left"
              @click="leftPrevYear"
            >
              <EhIcon><DArrowLeft /></EhIcon>
            </button>
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="arrow-left"
              @click="leftPrevMonth"
            >
              <EhIcon><ArrowLeft /></EhIcon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[ppNs.e('icon-btn'), { 'is-disabled': !enableYearArrow }]"
              class="d-arrow-right"
              @click="leftNextYear"
            >
              <EhIcon><DArrowRight /></EhIcon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="[
                ppNs.e('icon-btn'),
                { 'is-disabled': !enableMonthArrow },
              ]"
              class="arrow-right"
              @click="leftNextMonth"
            >
              <EhIcon><ArrowRight /></EhIcon>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <DateTable
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
        </div>
        <div :class="[ppNs.e('content'), drpNs.e('content')]" class="is-right">
          <div :class="drpNs.e('header')">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[ppNs.e('icon-btn'), { 'is-disabled': !enableYearArrow }]"
              class="d-arrow-left"
              @click="rightPrevYear"
            >
              <EhIcon><DArrowLeft /></EhIcon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="[
                ppNs.e('icon-btn'),
                { 'is-disabled': !enableMonthArrow },
              ]"
              class="arrow-left"
              @click="rightPrevMonth"
            >
              <EhIcon><ArrowLeft /></EhIcon>
            </button>
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="d-arrow-right"
              @click="rightNextYear"
            >
              <EhIcon><DArrowRight /></EhIcon>
            </button>
            <button
              type="button"
              :class="ppNs.e('icon-btn')"
              class="arrow-right"
              @click="rightNextMonth"
            >
              <EhIcon><ArrowRight /></EhIcon>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <DateTable
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
        </div>
      </div>
    </div>
    <div v-if="showTime" :class="ppNs.e('footer')">
      <EhButton
        v-if="clearable"
        text
        size="small"
        :class="ppNs.e('link-btn')"
        @click="handleClear"
      >
        {{ t('eh.datepicker.clear') }}
      </EhButton>
      <EhButton
        plain
        size="small"
        :class="ppNs.e('link-btn')"
        :disabled="btnDisabled"
        @click="handleRangeConfirm(false)"
      >
        {{ t('eh.datepicker.confirm') }}
      </EhButton>
    </div>
  </div>
</template>
