import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters/' //全局filters
import GL_Component from '@/utils/globalComponents' //全局组件

Vue.config.productionTip = false


// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.use(ElementUI); // 全局引入 ElementUI
Vue.use(GL_Component) 

// 注册全局filters
Object.keys(filters).forEach(key=>{
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
