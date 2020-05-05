import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner:false})

const instance = axios.create({
    baseURL:'./api',
    timeout:15000,
})

inatance.interceptors.request.use(
    config=>{
      NProgress.start()
      return config
    }
)

instance.interceptors.response.use(
    response=>{
       NProgress.done()
       return response.data
    },
    error=>{
        NProgress.done()

        alert(`请求出错: ${error.message || '未知错误'}`)

        return Promise.reject(error)
    }
)