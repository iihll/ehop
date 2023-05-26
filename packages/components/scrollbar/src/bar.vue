<script setup lang="ts">
import { ref } from 'vue'
import { GAP } from './util'
import Thumb from './thumb.vue'
import { barProps } from './bar'

const props = defineProps(barProps)

const moveX = ref(0)
const moveY = ref(0)

function handleScroll(wrap: HTMLDivElement) {
  if (wrap) {
    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP

    moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY
    moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX
  }
}

defineExpose({
  handleScroll,
})
</script>

<template>
  <Thumb :move="moveX" :ratio="ratioX" :size="width" :always="always" />
  <Thumb
    :move="moveY"
    :ratio="ratioY"
    :size="height"
    vertical
    :always="always"
  />
</template>
