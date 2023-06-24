<template>
  <eh-space direction="vertical" alignment="start" :size="30">
    <eh-radio-group v-model="size">
      <eh-radio :label="'large'">large</eh-radio>
      <eh-radio :label="'default'">default</eh-radio>
      <eh-radio :label="'small'">small</eh-radio>
    </eh-radio-group>

    <eh-space wrap :size="size">
      <eh-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
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
  </eh-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const size = ref('default')
</script>
