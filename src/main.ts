import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'

import LocalCache from '@/utils/cache'
import { loginApi } from '@/api/login/loginApi'
loginApi().then((res) => {
  LocalCache.setCache('token', res.data.token)
})

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).mount('#app')
