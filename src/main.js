import Vue from 'vue'
import App from './App.vue'

// 引入 store 文件
import store from './store'
// 引入路由
import router from "@/router";
// 引入公共样式
import "@/static/css/base.less";
// 引入插件
import "animate.css";
// 引入样式库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);


Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
