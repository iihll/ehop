<template>
  <eh-button v-popover="popoverRef" v-click-outside="onClickOutside">Click me</eh-button>

  <eh-popover ref="popoverRef" trigger="click" title="With title" virtual-triggering persistent>
    <span> Some content </span>
  </eh-popover>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'ehop'
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>
