<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <eh-radio v-model="direction" label="horizontal">horizontal</eh-radio>
      <eh-radio v-model="direction" label="vertical">vertical</eh-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<eh-slider v-model="fillRatio" />
    </div>
    <eh-space fill wrap :fill-ratio="fillRatio" :direction="direction" style="width: 100%">
      <eh-card v-for="i in 5" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <eh-button class="button" text>Operation button</eh-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </eh-card>
    </eh-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const direction = ref('horizontal')
const fillRatio = ref(30)
</script>
