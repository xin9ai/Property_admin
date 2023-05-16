import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

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
        component: () => import('@/views/system/sysUserList.vue')
      },
      {
        path: '/sysMenuList',
        name: 'sysMenuList',
        component: () => import('@/views/system/sysMenuList.vue')
      },
      {
        path: '/sysRoleList',
        name: 'sysRoleList',
        component: () => import('@/views/system/sysRoleList.vue')
      },
      // 房屋管理
      {
        path: '/houseBuilding',
        name: 'houseBuilding',
        component: () => import('@/views/Housing/houseBuilding.vue')
      },
      {
        path: '/houseUnit',
        name: 'houseUnit',
        component: () => import('@/views/Housing/houseUnit.vue')
      },
      {
        path: '/sysHouseList',
        name: 'sysHouseList',
        component: () => import('@/views/Housing/sysHouseList.vue')
      },
      // 车位管理
      {
        path: '/parkList',
        name: 'parkList',
        component: () => import('@/views/Location/parkList.vue')
      },
      // 业主管理
      {
        path: '/liveUser',
        name: 'liveUser',
        component: () => import('@/views/Owner/liveUser.vue')
      },
      // 收费管理
      {
        path: '/myPowerFee',
        name: 'myPowerFee',
        component: () => import('@/views/Payment/myPowerFee.vue')
      },
      {
        path: '/myWaterFee',
        name: 'myWaterFee',
        component: () => import('@/views/Payment/myWaterFee.vue')
      },
      {
        path: '/myParkFee',
        name: 'myParkFee',
        component: () => import('@/views/Payment/myParkFee.vue')
      },
      // 投诉管理
      {
        path: '/userComplaintList',
        name: 'userComplaintList',
        component: () => import('@/views/complaint/userComplaintList.vue')
      },
      {
        path: '/myUserComplaint',
        name: 'myUserComplaint',
        component: () => import('@/views/complaint/myUserComplaint.vue')
      },
      // 维修管理
      {
        path: '/repairList',
        name: 'repairList',
        component: () => import('@/views/maintenance/repairList.vue')
      },
      {
        path: '/myRepair',
        name: 'myRepair',
        component: () => import('@/views/maintenance/myRepair.vue')
      },

      // 公告管理
      {
        path: '/noticeList',
        name: 'noticeList',
        component: () => import('@/views/charge/noticeList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
