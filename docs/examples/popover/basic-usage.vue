<template>
  <eh-popover placement="top-start" title="Title" :width="200" trigger="hover"
    content="this is content, this is content, this is content">
    <template #reference>
      <eh-button class="m-2">Hover to activate</eh-button>
    </template>
  </eh-popover>

  <eh-popover placement="bottom" title="Title" :width="200" trigger="click"
    content="this is content, this is content, this is content">
    <template #reference>
      <eh-button class="m-2">Click to activate</eh-button>
    </template>
  </eh-popover>

  <eh-popover ref="popover" placement="right" title="Title" :width="200" trigger="focus"
    content="this is content, this is content, this is content">
    <template #reference>
      <eh-button class="m-2">Focus to activate</eh-button>
    </template>
  </eh-popover>

  <eh-popover ref="popover" title="Title" :width="200" trigger="contextmenu"
    content="this is content, this is content, this is content">
    <template #reference>
      <eh-button class="m-2">contextmenu to activate</eh-button>
    </template>
  </eh-popover>

  <eh-popover :visible="visible" placement="bottom" title="Title" :width="200"
    content="this is content, this is content, this is content">
    <template #reference>
      <eh-button class="m-2" @click="visible = !visible">Manual to activate</eh-button>
    </template>
  </eh-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<style scoped>
.el-button+.el-button {
  margin-left: 8px;
}
</style>
