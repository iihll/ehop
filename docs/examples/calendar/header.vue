<template>
  <eh-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <eh-button-group>
        <eh-button size="small" @click="selectDate('prev-year')">
          Previous Year
        </eh-button>
        <eh-button size="small" @click="selectDate('prev-month')">
          Previous Month
        </eh-button>
        <eh-button size="small" @click="selectDate('today')">Today</eh-button>
        <eh-button size="small" @click="selectDate('next-month')">
          Next Month
        </eh-button>
        <eh-button size="small" @click="selectDate('next-year')">
          Next Year
        </eh-button>
      </eh-button-group>
    </template>
  </eh-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarDateType, CalendarInstance } from 'ehop'

const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>
