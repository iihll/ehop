<template>
  <eh-radio-group v-model="size">
    <eh-radio label="large">Large</eh-radio>
    <eh-radio>Default</eh-radio>
    <eh-radio label="small">Small</eh-radio>
  </eh-radio-group>

  <eh-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
    <template #extra>
      <eh-button type="primary">Operation</eh-button>
    </template>
    <eh-descriptions-item>
      <template #label>
        <div class="cell-item">
          <eh-icon :style="iconStyle">
            <user />
          </eh-icon>
          Username
        </div>
      </template>
      kooriookami
    </eh-descriptions-item>
    <eh-descriptions-item>
      <template #label>
        <div class="cell-item">
          <eh-icon :style="iconStyle">
            <iphone />
          </eh-icon>
          Telephone
        </div>
      </template>
      18100000000
    </eh-descriptions-item>
    <eh-descriptions-item>
      <template #label>
        <div class="cell-item">
          <eh-icon :style="iconStyle">
            <location />
          </eh-icon>
          Place
        </div>
      </template>
      Suzhou
    </eh-descriptions-item>
    <eh-descriptions-item>
      <template #label>
        <div class="cell-item">
          <eh-icon :style="iconStyle">
            <tickets />
          </eh-icon>
          Remarks
        </div>
      </template>
      <eh-tag size="small">School</eh-tag>
    </eh-descriptions-item>
    <eh-descriptions-item>
      <template #label>
        <div class="cell-item">
          <eh-icon :style="iconStyle">
            <office-building />
          </eh-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </eh-descriptions-item>
  </eh-descriptions>

  <eh-descriptions class="margin-top" title="Without border" :column="3" :size="size" :style="blockMargin">
    <template #extra>
      <eh-button type="primary">Operation</eh-button>
    </template>
    <eh-descriptions-item label="Username">kooriookami</eh-descriptions-item>
    <eh-descriptions-item label="Telephone">18100000000</eh-descriptions-item>
    <eh-descriptions-item label="Place">Suzhou</eh-descriptions-item>
    <eh-descriptions-item label="Remarks">
      <eh-tag size="small">School</eh-tag>
    </eh-descriptions-item>
    <eh-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </eh-descriptions-item>
  </eh-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@ehop/icons-vue'

const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
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

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}
</style>
