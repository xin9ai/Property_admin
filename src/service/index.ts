import { BASE_URL, TIMEOUT } from '@/service/request/config'
import Request from '@/service/request'
const service = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YW5nbXIiLCJ1c2VyVHlwZSI6IjEiLCJleHAiOjE2ODQxNTk1NDksImlhdCI6MTY4NDE1Nzc0OTgyMH0.iXl_EU3Hd7dqFQv9N8rcVqop6ekBOrGq1TAGU5tw8s1kaOHxoaLfdUSgDOG8sukgwDmMz0sXTGUvYG_4t-nMsg'
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
