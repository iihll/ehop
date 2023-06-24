<template>
  <div class="join">
    <eh-tooltip placement="top" :hide-after="1000" :offset="20">
      <template #content>
        {{ homeLang['21'] }}
        <a href="mailto:ehop@outlook.com" target="_blank">
          &nbsp;ehop@outlook.com
        </a>
      </template>
      <a href="mailto:ehop@outlook.com" target="_blank">
        <eh-button style="overflow: hidden" :round="round">{{
          homeLang['20']
        }}</eh-button>
      </a>
    </eh-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])

defineProps<{ round?: boolean }>()
</script>
