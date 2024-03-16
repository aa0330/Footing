import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  
  server:{            // 配置端口和自动在浏览器中打开
    port:3000,
    open:'/'
  },

  plugins: [vue()],

})
