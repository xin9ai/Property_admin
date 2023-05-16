import { service } from '@/service'
interface typeList {
  loginNme: string
  phone: number
  curentPage: number
  pageSize: number
  total: number
}

export const getuserlist = (data: typeList) => {
  return service.request({
    url: '/user/list',
    method: 'get',
    data
  })
}
