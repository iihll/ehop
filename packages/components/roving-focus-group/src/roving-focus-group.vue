<template>
  <el-focus-group-collection>
    <el-roving-focus-group-impl v-bind="$attrs">
      <slot />
    </el-roving-focus-group-impl>
  </el-focus-group-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EhRovingFocusGroupImpl from './roving-focus-group-impl.vue'
import { EhCollection as EhFocusGroupCollection } from './roving-focus-group'

export default defineComponent({
  name: 'EhRovingFocusGroup',
  components: {
    EhFocusGroupCollection,
    EhRovingFocusGroupImpl,
  },
})
</script>
