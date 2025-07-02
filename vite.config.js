import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  build: {  
    // 其他构建配置...  
    assetsInclude: ['**/*.htm'],  
  },  
   devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/', //接口域名
        changeOrigin: true,       //是否跨域
      }
    },
    client:{
      overlay:false
    },
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  },
  plugins: [vue(),],
})
