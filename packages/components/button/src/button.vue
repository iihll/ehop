<script setup lang="ts">
import { EhIcon } from '@ehop/components/icon'
import { useNamespace } from '@ehop/hooks'
import type { VNode } from 'vue'
import { computed } from 'vue'
import { useButton } from './use-button'
import { buttonEmits, buttonProps } from './button'
import '../style'

const props = defineProps(buttonProps)

const emit = defineEmits(buttonEmits)

// if (true)
//   import('../style')

defineOptions({
  name: 'EhButton',
})

defineSlots<{
  default?(props: {}): VNode[]
  loading?(props: {}): VNode[]
  icon?(props: {}): VNode[]
}>()

const ns = useNamespace('button')

const { _type, shouldAddSpace, handleClick }
  = useButton(props, emit)

const buttonKls = computed(() => {
  const { loading, plain, round, circle, text, link, bg } = props
  return [
    ns.b(),
    ns.m(_type.value),
    ns.is('loading', loading),
    ns.is('plain', plain),
    ns.is('round', round),
    ns.is('circle', circle),
    ns.is('text', text),
    ns.is('link', link),
    ns.is('has-bg', bg),
  ]
})
</script>

<template>
  <component
    :is="tag"
    :class="buttonKls"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <EhIcon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </EhIcon>
    </template>
    <EhIcon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </EhIcon>
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </component>
</template>
