import { ElAlert } from '@ehop/components/alert'
import { ElAutocomplete } from '@ehop/components/autocomplete'
import { ElAvatar } from '@ehop/components/avatar'
import { ElBacktop } from '@ehop/components/backtop'
import { ElBadge } from '@ehop/components/badge'
import { ElBreadcrumb, ElBreadcrumbItem } from '@ehop/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@ehop/components/button'
import { ElCalendar } from '@ehop/components/calendar'
import { ElCard } from '@ehop/components/card'
import { ElCarousel, ElCarouselItem } from '@ehop/components/carousel'
import { ElCascader } from '@ehop/components/cascader'
import { ElCascaderPanel } from '@ehop/components/cascader-panel'
import { ElCheckTag } from '@ehop/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@ehop/components/checkbox'
import { ElCol } from '@ehop/components/col'
import { ElCollapse, ElCollapseItem } from '@ehop/components/collapse'
import { ElCollapseTransition } from '@ehop/components/collapse-transition'
import { ElColorPicker } from '@ehop/components/color-picker'
import { ElConfigProvider } from '@ehop/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@ehop/components/container'
import { ElDatePicker } from '@ehop/components/date-picker'
import { ElDescriptions, ElDescriptionsItem } from '@ehop/components/descriptions'
import { ElDialog } from '@ehop/components/dialog'
import { ElDivider } from '@ehop/components/divider'
import { ElDrawer } from '@ehop/components/drawer'
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from '@ehop/components/dropdown'
import { ElEmpty } from '@ehop/components/empty'
import { ElForm, ElFormItem } from '@ehop/components/form'
import { ElIcon } from '@ehop/components/icon'
import { ElImage } from '@ehop/components/image'
import { ElImageViewer } from '@ehop/components/image-viewer'
import { ElInput } from '@ehop/components/input'
import { ElInputNumber } from '@ehop/components/input-number'
import { ElLink } from '@ehop/components/link'
import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from '@ehop/components/menu'
import { ElPageHeader } from '@ehop/components/page-header'
import { ElPagination } from '@ehop/components/pagination'
import { ElPopconfirm } from '@ehop/components/popconfirm'
import { ElPopover } from '@ehop/components/popover'
import { ElPopper } from '@ehop/components/popper'
import { ElProgress } from '@ehop/components/progress'
import { ElRadio, ElRadioButton, ElRadioGroup } from '@ehop/components/radio'
import { ElRate } from '@ehop/components/rate'
import { ElResult } from '@ehop/components/result'
import { ElRow } from '@ehop/components/row'
import { ElScrollbar } from '@ehop/components/scrollbar'
import { ElOption, ElOptionGroup, ElSelect } from '@ehop/components/select'
import { ElSelectV2 } from '@ehop/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@ehop/components/skeleton'
import { ElSlider } from '@ehop/components/slider'
import { ElSpace } from '@ehop/components/space'
import { ElStatistic } from '@ehop/components/statistic'
import { ElCountdown } from '@ehop/components/countdown'
import { ElStep, ElSteps } from '@ehop/components/steps'
import { ElSwitch } from '@ehop/components/switch'
import { ElTable, ElTableColumn } from '@ehop/components/table'
import { ElAutoResizer, ElTableV2 } from '@ehop/components/table-v2'
import { ElTabPane, ElTabs } from '@ehop/components/tabs'
import { ElTag } from '@ehop/components/tag'
import { ElText } from '@ehop/components/text'
import { ElTimePicker } from '@ehop/components/time-picker'
import { ElTimeSelect } from '@ehop/components/time-select'
import { ElTimeline, ElTimelineItem } from '@ehop/components/timeline'
import { ElTooltip } from '@ehop/components/tooltip'
import { ElTooltipV2 } from '@ehop/components/tooltip-v2'
import { ElTransfer } from '@ehop/components/transfer'
import { ElTree } from '@ehop/components/tree'
import { ElTreeSelect } from '@ehop/components/tree-select'
import { ElTreeV2 } from '@ehop/components/tree-v2'
import { ElUpload } from '@ehop/components/upload'
import { ElAffix } from '@ehop/components/affix'

import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElText,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
] as Plugin[]
