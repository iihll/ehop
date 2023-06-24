<script setup lang="ts">
import { computed } from 'vue'
import { isClient } from '@vueuse/core'
import { useLang } from '../composables/lang'
import localeData from '../../i18n/pages/not-found.json'

const lang = useLang()

const locale = computed(() => localeData[lang.value])

const goHome = () => {
  if (!isClient) return
  window.location.href = `/${lang.value}/`
}
</script>

<template>
  <eh-result icon="error" :title="locale.title" :sub-title="locale.desc">
    <template #extra>
      <eh-button @click="goHome">{{ locale['button-title'] }}</eh-button>
    </template>
  </eh-result>
</template>

<style scoped>
.el-result {
  height: 100vh;
  width: 100vw;
}
</style>
