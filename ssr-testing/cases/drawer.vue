<template>
  <eh-radio-group v-model="direction">
    <eh-radio label="ltr">left to right</eh-radio>
    <eh-radio label="rtl">right to left</eh-radio>
    <eh-radio label="ttb">top to bottom</eh-radio>
    <eh-radio label="btt">bottom to top</eh-radio>
  </eh-radio-group>

  <eh-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </eh-button>
  <eh-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </eh-button>

  <eh-drawer v-model="drawer" title="I am the title" :direction="direction">
    <span>Hi, there!</span>
  </eh-drawer>
  <eh-drawer v-model="drawer2" :direction="direction">
    <template #title>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <eh-radio v-model="radio1" label="Option 1" size="large">Option 1</eh-radio>
        <eh-radio v-model="radio1" label="Option 2" size="large">Option 2</eh-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <eh-button @click="cancelClick">cancel</eh-button>
        <eh-button type="primary">confirm</eh-button>
      </div>
    </template>
  </eh-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref<'rtl'>('rtl')
const radio1 = ref('Option 1')

function cancelClick() {
  drawer2.value = false
}
</script>
