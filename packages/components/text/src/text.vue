<template>
  <component :is="tag" :class="textKls">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@ehop/hooks'
import { useFormSize } from '@ehop/components/form'
import { textProps } from './text'

defineOptions({
  name: 'EhText',
})

const props = defineProps(textProps)

const textSize = useFormSize()
const ns = useNamespace('text')

const textKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(textSize.value),
  ns.is('truncated', props.truncated),
])
</script>
