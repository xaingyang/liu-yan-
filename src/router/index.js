import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


// 声明使用vue插件
Vue.use(VueRouter)
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 重新指定原型上的push方法
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  console.log('push()', location, onComplete, onAbort)
  // 如果调用push, 传递了成功或者失败的回调函数
  if (onComplete || onAbort) {
    // 让原来的push方法进行处理
    originPush.call(this, location, onComplete, onAbort) // 
  } else { 
    return originPush.call(this, location).catch((error) => {
      console.log('catch 到重复请求的error')
     return new Promise(() => {}) 

    })   
  }
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete || onAbort) {
    originReplace.call(this, location, onComplete, onAbort) 
  } else {
    return originReplace.call(this, location).catch(() => {
      console.log('catch error2')
      return new Promise(() => {})
    })   
  }
}


export default new VueRouter({
  mode: 'history', 
  routes, // 配置所有路由
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }  
  }
})


