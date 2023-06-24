<template>
  <div>
    <eh-button mb-2 @click="toggle">Switch Language</eh-button>
    <br />

    <eh-config-provider :locale="locale">
      <eh-table mb-1 :data="[]" />
      <eh-pagination :total="100" />
    </eh-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from 'ehop/dist/locale/zh-cn.mjs'
import en from 'ehop/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
