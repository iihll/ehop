<template>
  <eh-page-header>
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
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </eh-page-header>
</template>
