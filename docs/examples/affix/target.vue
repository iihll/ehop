<template>
  <div class="affix-container">
    <eh-affix target=".affix-container" :offset="80">
      <eh-button type="primary">Target container</eh-button>
    </eh-affix>
  </div>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: var(--eh-color-primary-light-9);
}
</style>
