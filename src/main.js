// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import './plugins/element.js'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
// import ErrorPlugin from './plugins/errorPlugin'
// // svg
// import './plugins/svg.js'

// // 引入vueerror捕获报错
// Vue.use(ErrorPlugin)

// // 设置为 false 以阻止 vue 在启动时生成生产提示
// Vue.config.productionTip = false
// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   './components/common',
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /[A-Z]\w+\.(vue|js)$/
// )

// requireComponent.keys().forEach(fileName => {
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName)

//   // 获取组件的 PascalCase 命名
//   const componentName = upperFirst(
//     camelCase(
//       // 剥去文件名开头的 `./` 和结尾的扩展名
//       fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//     )
//   )

//   // 全局注册组件
//   Vue.component(
//     componentName,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   )
// })

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// main.js
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  const router = createRouter()
  const app = new Vue({
    router,
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  return { app, router }
}
