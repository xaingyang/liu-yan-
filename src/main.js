import Vue from 'vue'
import 'swiper/css/swiper.min.css' 

import App from '@/App'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import './mock/mockServer'

Vue.config.productionTip = false 
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)


new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
 
  render: h => h(App), 
  router, 
  store, 
}).$mount('#app')
