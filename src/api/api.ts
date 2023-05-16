import { service } from '@/service'
interface typeList {
  loginNme?: any
  phone?: any
  curentPage: number
  pageSize: number
  total: number
}

export const getuserlist = (data: typeList) => {
  return service.request({
    url: '/user/list',
    method: 'GET',
    params: data
  })
}
