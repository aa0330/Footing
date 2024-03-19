import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// import Icons from 'unplugin-icons/vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({

  server: {            // 配置端口和自动在浏览器中打开
    port: 3001,
    open: '/'
  },

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 路径别名
    }
  }
})
