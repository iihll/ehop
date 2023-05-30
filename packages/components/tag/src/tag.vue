<script lang="ts" setup>
import { computed } from 'vue'
import EhIcon from '@ehop/components/icon'
import { Close } from '@ehop/icons-vue'
import { useNamespace } from '@ehop/hooks'
import { useFormSize } from '@ehop/components/form'
import { tagEmits, tagProps } from './tag'
import '../style'

const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)
defineOptions({
  name: 'EhTag',
})
const tagSize = useFormSize()
const ns = useNamespace('tag')
const containerKls = computed(() => {
  const { type, hit, effect, closable, round } = props
  return [
    ns.b(),
    ns.is('closable', closable),
    ns.m(type),
    ns.m(tagSize.value),
    ns.m(effect),
    ns.is('hit', hit),
    ns.is('round', round),
  ]
})

// methods
function handleClose(event: MouseEvent) {
  emit('close', event)
}

function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <span
    v-if="disableTransitions"
    :class="containerKls"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <span :class="ns.e('content')">
      <slot />
    </span>
    <EhIcon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
      <Close />
    </EhIcon>
  </span>
  <transition v-else :name="`${ns.namespace.value}-zoom-in-center`" appear>
    <span
      :class="containerKls"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <span :class="ns.e('content')">
        <slot />
      </span>
      <EhIcon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
        <Close />
      </EhIcon>
    </span>
  </transition>
</template>
