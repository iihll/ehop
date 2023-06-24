<template>
  <eh-radio-group v-model="size">
    <eh-radio label="large">Large</eh-radio>
    <eh-radio>Default</eh-radio>
    <eh-radio label="small">Small</eh-radio>
  </eh-radio-group>

  <eh-descriptions title="Vertical list with border" direction="vertical" :column="4" :size="size" border>
    <eh-descriptions-item label="Username">kooriookami</eh-descriptions-item>
    <eh-descriptions-item label="Telephone">18100000000</eh-descriptions-item>
    <eh-descriptions-item label="Place" :span="2">Suzhou</eh-descriptions-item>
    <eh-descriptions-item label="Remarks">
      <eh-tag size="small">School</eh-tag>
    </eh-descriptions-item>
    <eh-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </eh-descriptions-item>
  </eh-descriptions>

  <eh-descriptions title="Vertical list without border" :column="4" :size="size" direction="vertical"
    :style="blockMargin">
    <eh-descriptions-item label="Username">kooriookami</eh-descriptions-item>
    <eh-descriptions-item label="Telephone">18100000000</eh-descriptions-item>
    <eh-descriptions-item label="Place" :span="2">Suzhou</eh-descriptions-item>
    <eh-descriptions-item label="Remarks">
      <eh-tag size="small">School</eh-tag>
    </eh-descriptions-item>
    <eh-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </eh-descriptions-item>
  </eh-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const size = ref('')
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
</style>
