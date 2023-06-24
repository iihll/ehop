<template>
  <eh-badge :value="200" :max="99" class="item">
    <eh-button>comments</eh-button>
  </eh-badge>
  <eh-badge :value="100" :max="10" class="item">
    <eh-button>replies</eh-button>
  </eh-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
