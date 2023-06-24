<template>
  <eh-form label-position="left" label-width="150px" style="max-width: 460px">
    <eh-space fill>
      <eh-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </eh-alert>
      <eh-form-item label="Full Name">
        <eh-input v-model="formAccessibility.fullName" />
      </eh-form-item>
    </eh-space>
    <eh-space fill>
      <eh-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br />
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </eh-alert>
      <eh-form-item label="Your Information">
        <eh-row :gutter="20">
          <eh-col :span="12">
            <eh-input v-model="formAccessibility.firstName" label="First Name" placeholder="First Name" />
          </eh-col>
          <eh-col :span="12">
            <eh-input v-model="formAccessibility.lastName" label="Last Name" placeholder="Last Name" />
          </eh-col>
        </eh-row>
      </eh-form-item>
    </eh-space>
  </eh-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
