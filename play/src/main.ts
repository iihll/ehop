import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import Ehop from 'ehop'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(Ehop)
app.use(createPinia())
app.use(router)

app.mount('#app')
