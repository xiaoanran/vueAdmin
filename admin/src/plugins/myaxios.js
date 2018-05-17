import axios from 'axios'
import qs from 'qs'

// 创建实例
const Axios = axios.create({
  baseURL: 'http://localhost:8080/admin',
  timeout: 10000,
  responseType: 'json',
  // 跨域
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// 请求拦截器
Axios.interceptors.request.use(
  // 发送之前
  config => {
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      // 序列化数据
      config.data = qs.stringify(config.data)
    }
    return config
  },
  // 请求错误
  error => {
    console.error('请求出错：' + error)
    return Promise.reject(error.data.error.message)
  }
)

// 返回拦截器
Axios.interceptors.response.use(
  // 正常响应
  response => {
    return response.data
  },
  // 错误
  error => {
    return Promise.reject(error)
  }
)

export default {
  install: function (Vue, Option) {
    Vue.prototype.$http = Axios
  }
}
