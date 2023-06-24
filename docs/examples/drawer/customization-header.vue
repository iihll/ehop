<template>
  <eh-button @click="visible = true">
    Open Drawer with customized header
  </eh-button>
  <eh-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <eh-button type="danger" @click="close">
        <eh-icon class="el-icon--left">
          <CircleCloseFilled />
        </eh-icon>
        Close
      </eh-button>
    </template>
    This is drawer content.
  </eh-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'ehop'
import { CircleCloseFilled } from '@ehop/icons-vue'

const visible = ref(false)
</script>
