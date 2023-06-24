<template>
  <eh-row>
    <eh-col :span="8">
      <eh-countdown title="Start to grab" :value="value" />
    </eh-col>
    <eh-col :span="8">
      <eh-countdown title="Remaining VIP time" format="HH:mm:ss" :value="value1" />
      <eh-button class="countdown-footer" type="primary" @click="reset">Reset
      </eh-button>
    </eh-col>
    <eh-col :span="8">
      <eh-countdown format="DD [days] HH:mm:ss" :value="value2">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            <eh-icon style="margin-right: 4px" :size="12">
              <Calendar />
            </eh-icon>
            Still to go until next month
          </div>
        </template>
      </eh-countdown>
      <div class="countdown-footer">{{ value2.format('YYYY-MM-DD') }}</div>
    </eh-col>
  </eh-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Calendar } from '@ehop/icons-vue'

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs().add(1, 'month').startOf('month'))

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

<style scoped>
.el-col {
  text-align: center;
}

.countdown-footer {
  margin-top: 8px;
}
</style>
