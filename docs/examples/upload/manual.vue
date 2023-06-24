<template>
  <eh-upload ref="uploadRef" class="upload-demo" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false">
    <template #trigger>
      <eh-button type="primary">select file</eh-button>
    </template>

    <eh-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </eh-button>

    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </eh-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadInstance } from 'ehop'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
