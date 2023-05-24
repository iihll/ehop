<script lang="ts" setup>
import { EhIcon } from '@ehop/components/icon'
import { useNamespace } from '@ehop/hooks'
import { useButton } from './use-button'
import { buttonEmits, buttonProps } from './button'

const props = defineProps(buttonProps)

const emit = defineEmits(buttonEmits)

defineOptions({
  name: 'EhButton',
})

const ns = useNamespace('button')

const { shouldAddSpace, handleClick }
  = useButton(props, emit)
</script>

<template>
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('text', text),
      ns.is('link', link),
      ns.is('has-bg', bg),
    ]"
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
