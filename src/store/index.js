import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// 声明使用vuex的插件
Vue.use(Vuex)
const mutations = {
  test2 (state) { 

  }
}

const actions = {

}

const getters = {

}
// 向外暴露store对象
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules
})

