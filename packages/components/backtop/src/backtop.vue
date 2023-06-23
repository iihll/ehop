<template>
  <transition :name="`${ns.namespace.value}-fade-in`">
    <div
      v-if="visible"
      :style="backTopStyle"
      :class="ns.b()"
      @click.stop="handleClick"
    >
      <slot>
        <eh-icon :class="ns.e('icon')"><caret-top /></eh-icon>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { EhIcon } from '@ehop/components/icon'
import { CaretTop } from '@ehop/icons-vue'
import { useNamespace } from '@ehop/hooks'
import { backtopEmits, backtopProps } from './backtop'
import { useBackTop } from './use-backtop'

const COMPONENT_NAME = 'EhBacktop'

defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(backtopProps)
const emit = defineEmits(backtopEmits)

const ns = useNamespace('backtop')

const { handleClick, visible } = useBackTop(props, emit, COMPONENT_NAME)

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))
</script>
