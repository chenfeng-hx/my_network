import Vue from 'vue'
import App from './App.vue'

// 引入 store 文件
import store from './store'
// 引入路由
import router from "@/router";
// 引入公共样式
import "./style/base.css";
// 引入插件
import "animate.css";

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
