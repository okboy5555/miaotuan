import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import './plugins/errorPlugin'

Vue.config.productionTip = false

export function createApp () {
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    bind: function (el) {
      // 聚焦元素
      el.focus()
    }
  })
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router }
}
