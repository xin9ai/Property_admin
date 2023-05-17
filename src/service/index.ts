import { BASE_URL, TIMEOUT } from '@/service/request/config'
import Request from '@/service/request'
import localCache from '@/utils/cache'
const service = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) config.headers.token = token

      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('局部请求失败拦截器')
      return error
    },
    responseInterceptor: (res) => {
      console.log('局部响应成功拦截器')
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('局部响应失败拦截器')
      return error
    }
  }
})

export { service }
