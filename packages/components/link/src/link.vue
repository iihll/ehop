<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <eh-icon v-if="icon">
      <component :is="icon" />
    </eh-icon>
    <span
      v-if="$slots.default"
      :class="ns.e('inner')"
    >
      <slot />
    </span>

    <slot
      v-if="$slots.icon"
      name="icon"
    />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { EhIcon } from '@ehop/components/icon'
import { useNamespace } from '@ehop/hooks'
import { linkEmits, linkProps } from './link'

defineOptions({
  name: 'EhLink',
})
const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('disabled', props.disabled),
  ns.is('underline', props.underline && !props.disabled),
])

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>
