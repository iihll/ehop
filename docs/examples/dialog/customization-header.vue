<template>
  <eh-button @click="visible = true">
    Open Dialog with customized header
  </eh-button>
  <eh-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <eh-button type="danger" @click="close">
          <eh-icon class="el-icon--left">
            <CircleCloseFilled />
          </eh-icon>
          Close
        </eh-button>
      </div>
    </template>
    This is dialog content.
  </eh-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDialog } from 'ehop'
import { CircleCloseFilled } from '@ehop/icons-vue'

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
