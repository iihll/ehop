<template>
  <eh-badge :value="12" class="item">
    <eh-button>comments</eh-button>
  </eh-badge>
  <eh-badge :value="3" class="item">
    <eh-button>replies</eh-button>
  </eh-badge>
  <eh-badge :value="1" class="item" type="primary">
    <eh-button>comments</eh-button>
  </eh-badge>
  <eh-badge :value="2" class="item" type="warning">
    <eh-button>replies</eh-button>
  </eh-badge>

  <eh-dropdown trigger="click">
    <span class="el-dropdown-link">
      Click Me
      <eh-icon class="el-icon--right"><caret-bottom /></eh-icon>
    </span>
    <template #dropdown>
      <eh-dropdown-menu>
        <eh-dropdown-item class="clearfix">
          comments
          <eh-badge class="mark" :value="12" />
        </eh-dropdown-item>
        <eh-dropdown-item class="clearfix">
          replies
          <eh-badge class="mark" :value="3" />
        </eh-dropdown-item>
      </eh-dropdown-menu>
    </template>
  </eh-dropdown>
</template>

<script lang="ts" setup>
import { CaretBottom } from '@ehop/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.el-dropdown {
  margin-top: 1.1rem;
}
</style>
