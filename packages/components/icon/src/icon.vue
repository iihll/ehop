<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, isUndefined } from '@ehop/utils'
import { useNamespace } from '@ehop/hooks'
import type { CSSProperties } from 'vue'
import { iconProps } from './icon'
import '../style'

const props = defineProps(iconProps)
defineOptions({
  name: 'EhIcon',
  inheritAttrs: false,
})
const ns = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color)
    return {}

  return {
    'fontSize': isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>

<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>
