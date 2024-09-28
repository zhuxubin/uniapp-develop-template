import { createSSRApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  // 引入pinia 全局状态管理
  app.use(pinia)
  return {
    app,
  }
}
