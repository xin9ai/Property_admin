import { service } from '@/service'
import { TableUser } from './type'

export const getUserListApi = (
  url: string,
  method: string,
  data?: TableUser
) => {
  return service.request({
    url,
    method,
    params: data
  })
}
