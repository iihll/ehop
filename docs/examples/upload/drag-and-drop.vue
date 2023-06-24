<template>
  <eh-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
    <eh-icon class="el-icon--upload"><upload-filled /></eh-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </eh-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@ehop/icons-vue'
</script>
