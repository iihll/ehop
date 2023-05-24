import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElIcons from '@ehop/icons-vue/global'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElIcons)
app.use(createPinia())
app.use(router)

app.mount('#app')
