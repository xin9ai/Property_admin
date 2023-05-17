import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard.vue')
      },
      // 系统管理
      {
        path: '/sysUserList',
        name: 'sysUserList',
        component: () => import('@/views/system/sysUserList/sysUserList.vue')
      },
      {
        path: '/sysMenuList',
        name: 'sysMenuList',
        component: () => import('@/views/system/sysMenuList/sysMenuList.vue')
      },
      {
        path: '/sysRoleList',
        name: 'sysRoleList',
        component: () => import('@/views/system/sysRoleList/sysRoleList.vue')
      },
      // 房屋管理
      {
        path: '/houseBuilding',
        name: 'houseBuilding',
        component: () =>
          import('@/views/Housing/houseBuilding/houseBuilding.vue')
      },
      {
        path: '/houseUnit',
        name: 'houseUnit',
        component: () => import('@/views/Housing/houseUnit/houseUnit.vue')
      },
      {
        path: '/sysHouseList',
        name: 'sysHouseList',
        component: () => import('@/views/Housing/sysHouseList/sysHouseList.vue')
      },
      // 车位管理
      {
        path: '/parkList',
        name: 'parkList',
        component: () => import('@/views/Location/parkList/parkList.vue')
      },
      // 业主管理
      {
        path: '/liveUser',
        name: 'liveUser',
        component: () => import('@/views/Owner/liveUser/liveUser.vue')
      },
      // 收费管理
      {
        path: '/feePark',
        name: 'feePark',
        component: () => import('@/views/fee/feePark/feePark.vue')
      },
      {
        path: '/feePower',
        name: 'feePower',
        component: () => import('@/views/fee/feePower/feePower.vue')
      },
      {
        path: '/feeWater',
        name: 'feeWater',
        component: () => import('@/views/fee/feeWater/feeWater.vue')
      },
      // 投诉管理
      {
        path: '/userComplaintList',
        name: 'userComplaintList',
        component: () =>
          import('@/views/complaint/userComplaint/userComplaintList.vue')
      },
      {
        path: '/myUserComplaint',
        name: 'myUserComplaint',
        component: () =>
          import('@/views/complaint/myUserComplaint/myUserComplaint.vue')
      },
      // 缴费记录
      {
        path: '/myPowerFee',
        name: 'myPowerFee',
        component: () => import('@/views/Payment/myPowerFee/myPowerFee.vue')
      },
      {
        path: '/myWaterFee',
        name: 'myWaterFee',
        component: () => import('@/views/Payment/myWaterFee/myWaterFee.vue')
      },
      {
        path: '/myParkFee',
        name: 'myParkFee',
        component: () => import('@/views/Payment/myParkFee/myParkFee.vue')
      },
      // 维修管理
      {
        path: '/repairList',
        name: 'repairList',
        component: () => import('@/views/maintenance/repairList/repairList.vue')
      },
      {
        path: '/myRepair',
        name: 'myRepair',
        component: () => import('@/views/maintenance/myRepair/myRepair.vue')
      },

      // 公告管理
      {
        path: '/noticeList',
        name: 'noticeList',
        component: () => import('@/views/charge/noticeList/noticeList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
