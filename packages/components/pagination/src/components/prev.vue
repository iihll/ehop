<template>
  <button type="button" class="btn-prev" :disabled="internalDisabled" :aria-label="prevText || t('eh.pagination.prev')"
    :aria-disabled="internalDisabled" @click="$emit('click', $event)">
    <span v-if="prevText">{{ prevText }}</span>
    <eh-icon v-else>
      <component :is="prevIcon" />
    </eh-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocale } from '@ehop/hooks'
import { EhIcon } from '@ehop/components/icon'
import { paginationPrevEmits, paginationPrevProps } from './prev'

defineOptions({
  name: 'EhPaginationPrev',
})

const props = defineProps(paginationPrevProps)
defineEmits(paginationPrevEmits)

const { t } = useLocale()

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1
)
</script>
