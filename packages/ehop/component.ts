import { EhAlert } from '@ehop/components/alert'
import { EhAutocomplete } from '@ehop/components/autocomplete'
import { EhAvatar } from '@ehop/components/avatar'
import { EhBacktop } from '@ehop/components/backtop'
import { EhBadge } from '@ehop/components/badge'
import { EhBreadcrumb, EhBreadcrumbItem } from '@ehop/components/breadcrumb'
import { EhButton, EhButtonGroup } from '@ehop/components/button'
import { EhCalendar } from '@ehop/components/calendar'
import { EhCard } from '@ehop/components/card'
import { EhCarousel, EhCarouselItem } from '@ehop/components/carousel'
import { EhCascader } from '@ehop/components/cascader'
import { EhCascaderPanel } from '@ehop/components/cascader-panel'
import { EhCheckTag } from '@ehop/components/check-tag'
import {
  EhCheckbox,
  EhCheckboxButton,
  EhCheckboxGroup,
} from '@ehop/components/checkbox'
import { EhCol } from '@ehop/components/col'
import { EhCollapse, EhCollapseItem } from '@ehop/components/collapse'
import { EhCollapseTransition } from '@ehop/components/collapse-transition'
import { EhColorPicker } from '@ehop/components/color-picker'
import { EhConfigProvider } from '@ehop/components/config-provider'
import {
  EhAside,
  EhContainer,
  EhFooter,
  EhHeader,
  EhMain,
} from '@ehop/components/container'
import { EhDatePicker } from '@ehop/components/date-picker'
import { EhDescriptions, EhDescriptionsItem } from '@ehop/components/descriptions'
import { EhDialog } from '@ehop/components/dialog'
import { EhDivider } from '@ehop/components/divider'
import { EhDrawer } from '@ehop/components/drawer'
import { EhDropdown, EhDropdownItem, EhDropdownMenu } from '@ehop/components/dropdown'
import { EhEmpty } from '@ehop/components/empty'
import { EhForm, EhFormItem } from '@ehop/components/form'
import { EhIcon } from '@ehop/components/icon'
import { EhImage } from '@ehop/components/image'
import { EhImageViewer } from '@ehop/components/image-viewer'
import { EhInput } from '@ehop/components/input'
import { EhInputNumber } from '@ehop/components/input-number'
import { EhLink } from '@ehop/components/link'
import { EhMenu, EhMenuItem, EhMenuItemGroup, EhSubMenu } from '@ehop/components/menu'
import { EhPageHeader } from '@ehop/components/page-header'
import { EhPagination } from '@ehop/components/pagination'
import { EhPopconfirm } from '@ehop/components/popconfirm'
import { EhPopover } from '@ehop/components/popover'
import { EhPopper } from '@ehop/components/popper'
import { EhProgress } from '@ehop/components/progress'
import { EhRadio, EhRadioButton, EhRadioGroup } from '@ehop/components/radio'
import { EhRate } from '@ehop/components/rate'
import { EhResult } from '@ehop/components/result'
import { EhRow } from '@ehop/components/row'
import { EhScrollbar } from '@ehop/components/scrollbar'
import { EhOption, EhOptionGroup, EhSelect } from '@ehop/components/select'
import { EhSelectV2 } from '@ehop/components/select-v2'
import { EhSkeleton, EhSkeletonItem } from '@ehop/components/skeleton'
import { EhSlider } from '@ehop/components/slider'
import { EhSpace } from '@ehop/components/space'
import { EhStatistic } from '@ehop/components/statistic'
import { EhCountdown } from '@ehop/components/countdown'
import { EhStep, EhSteps } from '@ehop/components/steps'
import { EhSwitch } from '@ehop/components/switch'
import { EhTable, EhTableColumn } from '@ehop/components/table'
import { EhAutoResizer, EhTableV2 } from '@ehop/components/table-v2'
import { EhTabPane, EhTabs } from '@ehop/components/tabs'
import { EhTag } from '@ehop/components/tag'
import { EhText } from '@ehop/components/text'
import { EhTimePicker } from '@ehop/components/time-picker'
import { EhTimeSelect } from '@ehop/components/time-select'
import { EhTimeline, EhTimelineItem } from '@ehop/components/timeline'
import { EhTooltip } from '@ehop/components/tooltip'
import { EhTooltipV2 } from '@ehop/components/tooltip-v2'
import { EhTransfer } from '@ehop/components/transfer'
import { EhTree } from '@ehop/components/tree'
import { EhTreeSelect } from '@ehop/components/tree-select'
import { EhTreeV2 } from '@ehop/components/tree-v2'
import { EhUpload } from '@ehop/components/upload'
import { EhAffix } from '@ehop/components/affix'

import type { Plugin } from 'vue'

export default [
  EhAffix,
  EhAlert,
  EhAutocomplete,
  EhAutoResizer,
  EhAvatar,
  EhBacktop,
  EhBadge,
  EhBreadcrumb,
  EhBreadcrumbItem,
  EhButton,
  EhButtonGroup,
  EhCalendar,
  EhCard,
  EhCarousel,
  EhCarouselItem,
  EhCascader,
  EhCascaderPanel,
  EhCheckTag,
  EhCheckbox,
  EhCheckboxButton,
  EhCheckboxGroup,
  EhCol,
  EhCollapse,
  EhCollapseItem,
  EhCollapseTransition,
  EhColorPicker,
  EhConfigProvider,
  EhContainer,
  EhAside,
  EhFooter,
  EhHeader,
  EhMain,
  EhDatePicker,
  EhDescriptions,
  EhDescriptionsItem,
  EhDialog,
  EhDivider,
  EhDrawer,
  EhDropdown,
  EhDropdownItem,
  EhDropdownMenu,
  EhEmpty,
  EhForm,
  EhFormItem,
  EhIcon,
  EhImage,
  EhImageViewer,
  EhInput,
  EhInputNumber,
  EhLink,
  EhMenu,
  EhMenuItem,
  EhMenuItemGroup,
  EhSubMenu,
  EhPageHeader,
  EhPagination,
  EhPopconfirm,
  EhPopover,
  EhPopper,
  EhProgress,
  EhRadio,
  EhRadioButton,
  EhRadioGroup,
  EhRate,
  EhResult,
  EhRow,
  EhScrollbar,
  EhSelect,
  EhOption,
  EhOptionGroup,
  EhSelectV2,
  EhSkeleton,
  EhSkeletonItem,
  EhSlider,
  EhSpace,
  EhStatistic,
  EhCountdown,
  EhSteps,
  EhStep,
  EhSwitch,
  EhTable,
  EhTableColumn,
  EhTableV2,
  EhTabs,
  EhTabPane,
  EhTag,
  EhText,
  EhTimePicker,
  EhTimeSelect,
  EhTimeline,
  EhTimelineItem,
  EhTooltip,
  EhTooltipV2,
  EhTransfer,
  EhTree,
  EhTreeSelect,
  EhTreeV2,
  EhUpload,
] as Plugin[]
