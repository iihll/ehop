<template>
  <span :class="ns.e('sizes')">
    <eh-select :model-value="innerPageSize" :disabled="disabled" :popper-class="popperClass" :size="size"
      :validate-event="false" @change="handleChange">
      <eh-option v-for="item in innerPageSizes" :key="item" :value="item" :label="item + t('eh.pagination.pagesize')" />
    </eh-select>
  </span>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { isEqual } from 'lodash-unified'
import { EhOption, EhSelect } from '@ehop/components/select'
import { useLocale, useNamespace } from '@ehop/hooks'
import { usePagination } from '../usePagination'
import { paginationSizesProps } from './sizes'

defineOptions({
  name: 'EhPaginationSizes',
})

const props = defineProps(paginationSizesProps)
const emit = defineEmits(['page-size-change'])
const { t } = useLocale()
const ns = useNamespace('pagination')
const pagination = usePagination()
const innerPageSize = ref<number>(props.pageSize!)

watch(
  () => props.pageSizes,
  (newVal, oldVal) => {
    if (isEqual(newVal, oldVal)) return
    if (Array.isArray(newVal)) {
      const pageSize = newVal.includes(props.pageSize!)
        ? props.pageSize
        : props.pageSizes[0]
      emit('page-size-change', pageSize)
    }
  }
)

watch(
  () => props.pageSize,
  (newVal) => {
    innerPageSize.value = newVal!
  }
)

const innerPageSizes = computed(() => props.pageSizes)
function handleChange(val: number) {
  if (val !== innerPageSize.value) {
    innerPageSize.value = val
    pagination.handleSizeChange?.(Number(val))
  }
}
</script>
