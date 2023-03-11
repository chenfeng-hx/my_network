import Vue from 'vue'
import App from './App.vue'

// 引入 store 文件
import store from './store'

// 引入插件


Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
