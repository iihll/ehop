<template>
  <eh-descriptions title="Customized style list" :column="3" border>
    <eh-descriptions-item label="Username" label-align="right" align="center" label-class-name="my-label"
      class-name="my-content" width="150px">kooriookami</eh-descriptions-item>
    <eh-descriptions-item label="Telephone" label-align="right" align="center">18100000000</eh-descriptions-item>
    <eh-descriptions-item label="Place" label-align="right" align="center">Suzhou</eh-descriptions-item>
    <eh-descriptions-item label="Remarks" label-align="right" align="center">
      <eh-tag size="small">School</eh-tag>
    </eh-descriptions-item>
    <eh-descriptions-item label="Address" label-align="right" align="center">No.1188, Wuzhong Avenue, Wuzhong District,
      Suzhou, Jiangsu
      Province</eh-descriptions-item>
  </eh-descriptions>
</template>
<style scoped>
.my-label {
  background: var(--eh-color-success-light-9);
}

.my-content {
  background: var(--eh-color-danger-light-9);
}
</style>
