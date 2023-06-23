<template>
  <span :class="ns.e('total')" :disabled="disabled">
    {{
      t('eh.pagination.total', {
        total,
      })
    }}
  </span>
</template>

<script lang="ts" setup>
import { useLocale, useNamespace } from '@ehop/hooks'
import { usePagination } from '../usePagination'
import { paginationTotalProps } from './total'

const { t } = useLocale()
const ns = useNamespace('pagination')
const { disabled } = usePagination()

defineOptions({
  name: 'EhPaginationTotal',
})

defineProps(paginationTotalProps)
</script>
