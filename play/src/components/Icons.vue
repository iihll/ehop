<script lang="ts" setup>
import { icons } from '@ehop/icons-vue/global'
</script>

<template>
  <component :is="Icon" v-for="(Icon, key) in icons" :key="key" class="icon" />
  <hr>
  <component
    :is="`EhIcon${key}`"
    v-for="key in Object.keys(icons)"
    :key="key"
    class="icon"
  />
</template>

<style>
.icon {
  height: 48px;
  color: #409eff;
}
</style>
