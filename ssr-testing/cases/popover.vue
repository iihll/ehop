<template>
  <eh-popover ref="popover" placement="right" title="Title" :width="200" trigger="focus"
    content="this is content, this is content, this is content">
    <template #reference>
      <eh-button>Focus to activate</eh-button>
    </template>
  </eh-popover>
</template>
