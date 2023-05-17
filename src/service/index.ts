import { BASE_URL, TIMEOUT } from '@/service/request/config'
import Request from '@/service/request'
const service = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJUeXBlIjoiMSIsImV4cCI6MTY4NDI0ODEzOCwiaWF0IjoxNjg0MjQ2MzM4ODIwfQ.YWR7Eji-lY5_Azr4qEo07MKS3Q1uhEYa7WL1WKQce3BUqsN-WFrluD7q9R4beCzLxsFlHi-8IWYeaTLKIxahfA'

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
