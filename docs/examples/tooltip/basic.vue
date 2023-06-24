<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <eh-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
        <eh-button>top-start</eh-button>
      </eh-tooltip>
      <eh-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <eh-button>top</eh-button>
      </eh-tooltip>
      <eh-tooltip class="box-item" effect="dark" content="Top Right prompts info" placement="top-end">
        <eh-button>top-end</eh-button>
      </eh-tooltip>
    </div>
    <div class="row">
      <eh-tooltip class="box-item" effect="dark" content="Left Top prompts info" placement="left-start">
        <eh-button>left-start</eh-button>
      </eh-tooltip>
      <eh-tooltip class="box-item" effect="dark" content="Right Top prompts info" placement="right-start">
        <eh-button>right-start</eh-button>
      </eh-tooltip>
    </div>
    <div class="row">
      <eh-tooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
        <eh-button class="mt-3 mb-3">left</eh-button>
      </eh-tooltip>
      <eh-tooltip class="box-item" effect="dark" content="Right Center prompts info" placement="right">
        <eh-button>right</eh-button>
      </eh-tooltip>
    </div>
    <div class="row">
      <eh-tooltip class="box-item" effect="dark" content="Left Bottom prompts info" placement="left-end">
        <eh-button>left-end</eh-button>
      </eh-tooltip>
      <eh-tooltip class="box-item" effect="dark" content="Right Bottom prompts info" placement="right-end">
        <eh-button>right-end</eh-button>
      </eh-tooltip>
    </div>
    <div class="row center">
      <eh-tooltip class="box-item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
        <eh-button>bottom-start</eh-button>
      </eh-tooltip>
      <eh-tooltip class="box-item" effect="dark" content="Bottom Center prompts info" placement="bottom">
        <eh-button>bottom</eh-button>
      </eh-tooltip>
      <eh-tooltip class="box-item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
        <eh-button>bottom-end</eh-button>
      </eh-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
