<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@ehop/hooks'

// import { useFormSize } from '@ehop/components/form'
import { textProps } from './text'
import '../style'

const props = defineProps(textProps)

defineOptions({
  name: 'ElText',
})

// const textSize = useFormSize()
const ns = useNamespace('text')

const textKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  // ns.m(textSize.value),
  ns.is('truncated', props.truncated),
])
</script>

<template>
  <component :is="tag" :class="textKls">
    <slot />
  </component>
</template>
