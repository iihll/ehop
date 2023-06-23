<template>
  <button
    type="button"
    class="btn-next"
    :disabled="internalDisabled"
    :aria-label="nextText || t('eh.pagination.next')"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="nextText">{{ nextText }}</span>
    <el-icon v-else>
      <component :is="nextIcon" />
    </el-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocale } from '@ehop/hooks'
import { EhIcon } from '@ehop/components/icon'
import { paginationNextProps } from './next'

defineOptions({
  name: 'EhPaginationNext',
})

const props = defineProps(paginationNextProps)

defineEmits(['click'])

const { t } = useLocale()

const internalDisabled = computed(
  () =>
    props.disabled ||
    props.currentPage === props.pageCount ||
    props.pageCount === 0
)
</script>
