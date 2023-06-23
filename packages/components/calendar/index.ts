import { withInstall } from '@ehop/utils'
import Calendar from './src/calendar.vue'

export const EhCalendar = withInstall(Calendar)
export default EhCalendar

export * from './src/calendar'
export type {
  CalendarDateTableInstance,
  DateTableInstance,
  CalendarInstance,
} from './src/instance'
