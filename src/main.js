import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/theme-chalk/index.css'     // 引入element-plus默认样式
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入 图标
import router from './router'
import pinia from '@/store/index'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
