<template>
  <eh-breadcrumb :separator-icon="ArrowRight">
    <eh-breadcrumb-item :to="{ path: '/' }">homepage</eh-breadcrumb-item>
    <eh-breadcrumb-item>promotion management</eh-breadcrumb-item>
    <eh-breadcrumb-item>promotion list</eh-breadcrumb-item>
    <eh-breadcrumb-item>promotion detail</eh-breadcrumb-item>
  </eh-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@ehop/icons-vue'
</script>
