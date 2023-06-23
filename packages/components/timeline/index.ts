import { withInstall, withNoopInstall } from '@ehop/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

export const EhTimeline = withInstall(Timeline, {
  TimelineItem,
})
export default EhTimeline
export const EhTimelineItem = withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
