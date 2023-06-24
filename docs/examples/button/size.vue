<template>
  <eh-row>
    <eh-button size="large">Large</eh-button>
    <eh-button>Default</eh-button>
    <eh-button size="small">Small</eh-button>
    <eh-button size="large" :icon="Search">Search</eh-button>
    <eh-button :icon="Search">Search</eh-button>
    <eh-button size="small" :icon="Search">Search</eh-button>
  </eh-row>
  <eh-row class="my-4">
    <eh-button size="large" round>Large</eh-button>
    <eh-button round>Default</eh-button>
    <eh-button size="small" round>Small</eh-button>
    <eh-button size="large" :icon="Search" round>Search</eh-button>
    <eh-button :icon="Search" round>Search</eh-button>
    <eh-button size="small" :icon="Search" round>Search</eh-button>
  </eh-row>
  <eh-row>
    <eh-button :icon="Search" size="large" circle />
    <eh-button :icon="Search" circle />
    <eh-button :icon="Search" size="small" circle />
  </eh-row>
</template>

<script setup lang="ts">
import { Search } from '@ehop/icons-vue'
</script>
