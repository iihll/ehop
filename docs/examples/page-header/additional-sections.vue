<template>
  <eh-page-header :icon="null">
    <template #content>
      <div class="flex items-center">
        <eh-avatar :size="32" class="mr-3" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
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
  </eh-page-header>
</template>
