<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <picture-filled v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@ehop/hooks'
import { PictureFilled } from '@ehop/icons-vue'
import { skeletonItemProps } from './skeleton-item'

defineOptions({
  name: 'EhSkeletonItem',
})
defineProps(skeletonItemProps)
const ns = useNamespace('skeleton')
</script>
