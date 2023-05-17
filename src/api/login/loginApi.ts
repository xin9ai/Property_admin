import { service } from '@/service'

export const loginApi = () => {
  return service.request({
    url: '/user/login',
    method: 'POST',
    data: {
      username: 'admin',
      password: '123456',
      userType: 1
    }
  })
}
