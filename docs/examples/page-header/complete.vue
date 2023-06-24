<template>
  <div aria-label="A complete example of page header">
    <eh-page-header @back="onBack">
      <template #breadcrumb>
        <eh-breadcrumb separator="/">
          <eh-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </eh-breadcrumb-item>
          <eh-breadcrumb-item><a href="./page-header.html">route 1</a></eh-breadcrumb-item>
          <eh-breadcrumb-item>route 2</eh-breadcrumb-item>
        </eh-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <eh-avatar class="mr-3" :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <span class="text-large font-600 mr-3"> Title </span>
          <span class="text-sm mr-2" style="color: var(--eh-text-color-regular)">
            Sub title
          </span>
          <eh-tag>Default</eh-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <eh-button>Print</eh-button>
          <eh-button type="primary" class="ml-2">Edit</eh-button>
        </div>
      </template>

      <eh-descriptions :column="3" size="small" class="mt-4">
        <eh-descriptions-item label="Username">kooriookami</eh-descriptions-item>
        <eh-descriptions-item label="Telephone">18100000000</eh-descriptions-item>
        <eh-descriptions-item label="Place">Suzhou</eh-descriptions-item>
        <eh-descriptions-item label="Remarks">
          <eh-tag size="small">School</eh-tag>
        </eh-descriptions-item>
        <eh-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </eh-descriptions-item>
      </eh-descriptions>
      <p class="mt-4 text-sm">
        Ehop team uses <b>weekly</b> release strategy under normal circumstance,
        but critical bug fixes would require hotfix so the actual release number
        <b>could be</b> more than 1 per week.
      </p>
    </eh-page-header>
  </div>
</template>

<script setup lang="ts">
import { ElNotification as notify } from 'ehop'

const onBack = () => {
  notify('Back')
}
</script>
