import Vue from 'vue'
import 'swiper/css/swiper.min.css' 
import App from '@/App'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import './mock/mockServer'
 // 去掉不是生产环境的提示
Vue.config.productionTip = false
// 注册全局组件
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)
new Vue({
  beforeCreate() {
    // 给Vue原型对象指定事件总线对象(当前vm对象)
    Vue.prototype.$bus = this
  },
  // el: '#app'
  render: h => h(App), 
  router, 
  store, 
}).$mount('#app')
