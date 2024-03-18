import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  
  server:{            // 配置端口和自动在浏览器中打开
    port:3001,
    open:'/'
  },
  
  plugins: [vue()],

  resolve:{
    alias:{
      '@': resolve(__dirname, 'src') // 路径别名
    }
  }
})
