<template>
  <eh-row>
    <eh-col :sm="12" :lg="6">
      <eh-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
        <template #extra>
          <eh-button type="primary">Back</eh-button>
        </template>
      </eh-result>
    </eh-col>
    <eh-col :sm="12" :lg="6">
      <eh-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
        <template #extra>
          <eh-button type="primary">Back</eh-button>
        </template>
      </eh-result>
    </eh-col>
    <eh-col :sm="12" :lg="6">
      <eh-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
        <template #extra>
          <eh-button type="primary">Back</eh-button>
        </template>
      </eh-result>
    </eh-col>
    <eh-col :sm="12" :lg="6">
      <eh-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>Using slot as subtitle</p>
        </template>
        <template #extra>
          <eh-button type="primary">Back</eh-button>
        </template>
      </eh-result>
    </eh-col>
  </eh-row>
</template>
