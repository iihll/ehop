<template>
  <div class="alignment-container">
    <eh-space>
      string
      <eh-button> button </eh-button>
      <eh-card>
        <template #header> header </template>
        body
      </eh-card>
    </eh-space>
  </div>
  <div class="alignment-container">
    <eh-space alignment="flex-start">
      string
      <eh-button> button </eh-button>
      <eh-card>
        <template #header> header </template>
        body
      </eh-card>
    </eh-space>
  </div>
  <div class="alignment-container">
    <eh-space alignment="flex-end">
      string
      <eh-button> button </eh-button>
      <eh-card>
        <template #header> header </template>
        body
      </eh-card>
    </eh-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--eh-border-color);
}
</style>
