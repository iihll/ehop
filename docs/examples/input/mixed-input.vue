<template>
  <div>
    <eh-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </eh-input>
  </div>
  <div class="mt-4">
    <eh-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </eh-input>
  </div>
  <div class="mt-4">
    <eh-input v-model="input3" placeholder="Please input" class="input-with-select">
      <template #prepend>
        <eh-select v-model="select" placeholder="Select" style="width: 115px">
          <eh-option label="Restaurant" value="1" />
          <eh-option label="Order No." value="2" />
          <eh-option label="Tel" value="3" />
        </eh-select>
      </template>
      <template #append>
        <eh-button :icon="Search" />
      </template>
    </eh-input>
  </div>
  <div class="mt-4">
    <eh-input v-model="input3" placeholder="Please input" class="input-with-select">
      <template #prepend>
        <eh-button :icon="Search" />
      </template>
      <template #append>
        <eh-select v-model="select" placeholder="Select" style="width: 115px">
          <eh-option label="Restaurant" value="1" />
          <eh-option label="Order No." value="2" />
          <eh-option label="Tel" value="3" />
        </eh-select>
      </template>
    </eh-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@ehop/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--eh-fill-color-blank);
}
</style>
