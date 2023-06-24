<template>
  <eh-row :gutter="16">
    <eh-col :span="8">
      <div class="statistic-card">
        <eh-statistic :value="98500">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Daily active users
              <eh-tooltip effect="dark" content="Number of users who logged into the product in one day" placement="top">
                <eh-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </eh-icon>
              </eh-tooltip>
            </div>
          </template>
        </eh-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              24%
              <eh-icon>
                <CaretTop />
              </eh-icon>
            </span>
          </div>
        </div>
      </div>
    </eh-col>
    <eh-col :span="8">
      <div class="statistic-card">
        <eh-statistic :value="693700">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Monthly Active Users
              <eh-tooltip effect="dark" content="Number of users who logged into the product in one month"
                placement="top">
                <eh-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </eh-icon>
              </eh-tooltip>
            </div>
          </template>
        </eh-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month</span>
            <span class="red">
              12%
              <eh-icon>
                <CaretBottom />
              </eh-icon>
            </span>
          </div>
        </div>
      </div>
    </eh-col>
    <eh-col :span="8">
      <div class="statistic-card">
        <eh-statistic :value="72000" title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              New transactions today
            </div>
          </template>
        </eh-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              16%
              <eh-icon>
                <CaretTop />
              </eh-icon>
            </span>
          </div>
          <div class="footer-item">
            <eh-icon :size="14">
              <ArrowRight />
            </eh-icon>
          </div>
        </div>
      </div>
    </eh-col>
  </eh-row>
</template>

<script lang="ts" setup>
import { ArrowRight, CaretBottom, CaretTop, Warning } from '@ehop/icons-vue'
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--eh-fill-color) !important;
}

.el-statistic {
  --eh-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--eh-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--eh-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--eh-color-success);
}

.red {
  color: var(--eh-color-error);
}
</style>
