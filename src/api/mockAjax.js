import axios from 'axios'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

// 配置不显示右上角的旋转进度条, 只显示水平进度条
NProgress.configure({ showSpinner: false }) 

/*  配置通用的基础路径和超时 */
const instance = axios.create({
  baseURL: '/mock', 
  timeout: 15000, 
})

// axios请求拦截器
instance.interceptors.request.use(config => {
  /* 显示请求进度条 */
  NProgress.start()
  return config
})

// axios响应截器
instance.interceptors.response.use(
  response => {
    // console.log('响应拦截器成功回调执行')
    /*  请求成功结束 隐藏进度条 */
    NProgress.done()
    /*   成功返回的数据是响应体数据response.data */
    // return response
    return response.data
  },
  error => {

    /*  请求成功结束 隐藏进度条 */
    NProgress.done()

    /* 4. 统一处理请求错误, 具体请求也可以选择处理或不处理 */
    alert(`请求出错: ${error.message || '未知错误'}`)
    return Promise.reject(error)
  }
)
export default instance


