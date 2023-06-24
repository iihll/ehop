<template>
  <eh-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </eh-button>

  <eh-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <eh-button @click="innerDrawer = true">Click me!</eh-button>
      <eh-drawer v-model="innerDrawer" title="I'm inner Drawer" :append-to-body="true" :before-close="handleClose">
        <p>_(:зゝ∠)_</p>
      </eh-drawer>
    </div>
  </eh-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'ehop'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
