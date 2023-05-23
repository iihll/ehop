<script lang="ts" setup>
import { useNamespace } from '@ehop/hooks'
import { useButton } from './use-button'
import { buttonEmits, buttonProps } from './button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const ns = useNamespace('button')

const { shouldAddSpace, handleClick }
  = useButton(props, emit)
</script>

<template>
  <component
    :is="tag"
    @click="handleClick"
  >
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </component>
</template>
