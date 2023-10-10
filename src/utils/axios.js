import axios from "axios";
import { showToast, showFailToast } from "vant";
import router from "@/router";

console.log('import.meta.enc', import.meta.env);
axios.defaults.baseURL = import.meta.env.MODE == 'development'?  '//backend-api-01.newbee.ltd/api/v1' : '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'
 // interceptors 是拦截器，每个请求都会经过这个拦截器，返回的数据可以通过拦截处理后返回
 axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
     showFailToast('服务端异常！')
      return Promise.reject(res)
    }
    if (res.data.resultCode != 200) {
      if (res.data.message) showFailToast(res.data.message)
      if (res.data.resultCode == 416) {
       // 返回 416 代表没有登录状态，路由跳转到/login 页面
        router.push({ path: '/login' })
      }
      if (res.data.data && window.location.hash == '#/login') {
        setLocal('token', res.data.data)
        axios.defaults.headers['token'] = res.data.data
      }
      return Promise.reject(res.data)
    }
  
    return res.data
  })
  
  export default axios