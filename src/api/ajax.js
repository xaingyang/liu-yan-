import axios from 'axios'
// import NProgress from 'nprogress/nprogress' // 加载nprogress包中的nprogress.js
import NProgress from 'nprogress' // 加载nprogress包中的nprogress.js  内部配置了"main": "nprogress.js"
import 'nprogress/nprogress.css' // 加载nprogress包中的nprogress.css
import store from '@/store'

// 配置不显示右上角的旋转进度条, 只显示水平进度条
NProgress.configure({ showSpinner: false }) 

/* 配置通用的基础路径和超时 */
const instance = axios.create({
  baseURL: '/api', 
  timeout: 15000, 
})
// axios请求拦截器
instance.interceptors.request.use(config => {
  NProgress.start()

  /*每次请求都携带一个userTempId请求头, 数据值在state中 */
  config.headers['userTempId'] = store.state.user.userTempId
  return config
})

// axios响应截器
instance.interceptors.response.use(
  response => {
    /* 请求成功结束 隐藏进度条 */
    NProgress.done()
    /*成功返回的数据是响应体数据response.data */
    return response.data
  },
  error => {
    NProgress.done()
    alert(`请求出错: ${error.message || '未知错误'}`)
    return Promise.reject(error)
  }
)
export default instance


