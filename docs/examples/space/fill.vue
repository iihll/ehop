<template>
  <div>
    <div style="margin-bottom: 15px">fill: <eh-switch v-model="fill" /></div>
    <eh-space :fill="fill" wrap>
      <eh-card v-for="i in 3" :key="i" class="box-card">
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

const fill = ref(true)
</script>
