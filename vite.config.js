import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({

  server: {            // 配置端口和自动在浏览器中打开
    port: 3001,
    open: '/'
  },

  plugins: [
    vue(),
    AutoImport({

      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        

      ],
    
    }),
    Components({
      resolvers: [

        // 自动注册图标组件
        

        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
    }),

    
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 路径别名
    }
  }
})
