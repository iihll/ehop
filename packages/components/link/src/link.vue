<script setup lang="ts">
import { computed } from 'vue'
import { EhIcon } from '@ehop/components/icon'
import { useNamespace } from '@ehop/hooks'
import { linkEmits, linkProps } from './link'
import '../style'

const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)
defineOptions({
  name: 'EhLink',
})
defineSlots<{
  default?(props: {}): any
  icon?(props: {}): any
}>()
const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('disabled', props.disabled),
  ns.is('underline', props.underline && !props.disabled),
])

function handleClick(event: MouseEvent) {
  if (!props.disabled)
    emit('click', event)
}
</script>

<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <EhIcon v-if="icon"><component :is="icon" /></EhIcon>
    <span v-if="$slots.default" :class="ns.e('inner')">
      <slot />
    </span>

    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>
