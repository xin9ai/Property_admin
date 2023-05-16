import { BASE_URL, TIMEOUT } from '@/service/request/config'
import Request from '@/service/request'
const service = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJUeXBlIjoiMSIsImV4cCI6MTY4NDIwNTAzMiwiaWF0IjoxNjg0MjAzMjMyODYwfQ.bQj-LMwT18jS2rqV0oqF40GSguLD1njPcYYDp-jww9J6b4qjsRPwCcsMlwj4rFZuE53bigucFqLF3h3PS_cIhA'
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
