<template>
  <eh-row class="mb-4">
    <eh-button>Default</eh-button>
    <eh-button type="primary">Primary</eh-button>
    <eh-button type="success">Success</eh-button>
    <eh-button type="info">Info</eh-button>
    <eh-button type="warning">Warning</eh-button>
    <eh-button type="danger">Danger</eh-button>
  </eh-row>

  <eh-row class="mb-4">
    <eh-button plain>Plain</eh-button>
    <eh-button type="primary" plain>Primary</eh-button>
    <eh-button type="success" plain>Success</eh-button>
    <eh-button type="info" plain>Info</eh-button>
    <eh-button type="warning" plain>Warning</eh-button>
    <eh-button type="danger" plain>Danger</eh-button>
  </eh-row>

  <eh-row class="mb-4">
    <eh-button round>Round</eh-button>
    <eh-button type="primary" round>Primary</eh-button>
    <eh-button type="success" round>Success</eh-button>
    <eh-button type="info" round>Info</eh-button>
    <eh-button type="warning" round>Warning</eh-button>
    <eh-button type="danger" round>Danger</eh-button>
  </eh-row>

  <eh-row>
    <eh-button :icon="Search" circle />
    <eh-button type="primary" :icon="Edit" circle />
    <eh-button type="success" :icon="Check" circle />
    <eh-button type="info" :icon="Message" circle />
    <eh-button type="warning" :icon="Star" circle />
    <eh-button type="danger" :icon="Delete" circle />
  </eh-row>
</template>

<script lang="ts" setup>
import { Check, Delete, Edit, Message, Search, Star } from '@ehop/icons-vue'
</script>
