<template>
  <div class="play-container">
    <eh-icon color="#409EFC">
      <eh-icon-check />
    </eh-icon>
    <eh-icon>
      <eh-icon-menu />
    </eh-icon>
    <eh-button>test</eh-button>
    <div v-loading="true" />
  </div>
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
