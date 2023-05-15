const menulist = [
  {
    path: '/system',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '系统管理',
      icon: 'el-icon-menu',
      roles: ['sys:system']
    },
    children: [
      {
        path: '/sysUserList',
        component: '/system/sysUserList',
        alwaysShow: false,
        name: 'sys:user:index',
        meta: {
          title: '员⼯管理',
          icon: 'el-icon-s-custom',
          roles: ['sys:sysUserList']
        }
      },
      {
        path: '/sysRoleList',
        component: '/system/sysRoleList',
        alwaysShow: false,
        name: 'sysRoleList',
        meta: {
          title: '⻆⾊管理',
          icon: 'el-icon-date',
          roles: ['sys:sysRoleList']
        }
      },
      {
        path: '/sysMenuList',
        component: '/system/sysMenuList',
        alwaysShow: false,
        name: 'sysMenuList',
        meta: {
          title: '权限管理',
          icon: 'el-icon-school',
          roles: ['sys:sysMenuList']
        }
      }
    ]
  },
  {
    path: '/sysHouse',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '房屋管理',
      icon: 'el-icon-s-help',
      roles: ['sys:home:index']
    },
    children: [
      {
        path: '/houseBuilding',
        component: '/house/houseBuilding',
        alwaysShow: false,
        name: 'houseBuilding',
        meta: {
          title: '栋数管理',
          icon: 'table',
          roles: ['sys:houseBuilding']
        }
      },
      {
        path: '/houseUnit',
        component: '/house/houseUnit',
        alwaysShow: false,
        name: 'houseUnit',
        meta: {
          title: '单元管理',
          icon: 'table',
          roles: ['sys:houseUnit']
        }
      },
      {
        path: '/sysHouseList',
        component: '/house/houseList',
        alwaysShow: false,
        name: 'sysHouseList',
        meta: {
          title: '房屋列表',
          icon: 'el-icon-mobile',
          roles: ['sys:house:list']
        }
      }
    ]
  },
  {
    path: '/sysPark',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '⻋位管理',
      icon: 'el-icon-money',
      roles: ['sys:sysPark']
    },
    children: [
      {
        path: '/parkList',
        component: '/park/parkList',
        alwaysShow: false,
        name: 'parkList',
        meta: {
          title: '⻋位管理',
          icon: 'el-icon-money',
          roles: ['sys:parkList']
        }
      }
    ]
  },
  {
    path: '/live',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '业主管理',
      icon: 'el-icon-s-grid',
      roles: ['sys:live']
    },
    children: [
      {
        path: '/liveUser',
        component: '/live/liveUser',
        alwaysShow: false,
        name: 'liveUser',
        meta: {
          title: '业主列表',
          icon: 'el-icon-s-data',
          roles: ['sys:liveUser']
        }
      }
    ]
  },
  {
    path: '/fee',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '收费管理',
      icon: 'el-icon-s-open',
      roles: ['sys:fee']
    },
    children: [
      {
        path: '/feePower',
        component: '/fee/feePower',
        alwaysShow: false,
        name: 'feePower',
        meta: {
          title: '电费管理',
          icon: 'el-icon-picture',
          roles: ['sys:feePower']
        }
      },
      {
        path: '/feeWater',
        component: '/fee/feeWater',
        alwaysShow: false,
        name: 'feeWater',
        meta: {
          title: '⽔费管理',
          icon: 'el-icon-s-data',
          roles: ['sys:feeWater']
        }
      },
      {
        path: '/feePark',
        component: '/fee/feePark',
        alwaysShow: false,
        name: 'feePark',
        meta: {
          title: '停⻋管理',
          icon: 'el-icon-s-order',
          roles: ['sys:feePark']
        }
      }
    ]
  },
  {
    path: '/userComplaint',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '投诉管理',
      icon: 'el-icon-date',
      roles: ['sys:userComplaint']
    },
    children: [
      {
        path: '/userComplaintList',
        component: '/userComplaint/userComplaint',
        alwaysShow: false,
        name: 'userComplaintList',
        meta: {
          title: '投诉列表',
          icon: 'el-icon-edit-outline',
          roles: ['sys:userComplaintList']
        }
      },
      {
        path: '/myUserComplaint',
        component: '/userComplaint/myUserComplaint',
        alwaysShow: false,
        name: 'myUserComplaint',
        meta: {
          title: '我的投诉',
          icon: 'el-icon-menu',
          roles: ['sys:myUserComplaint']
        }
      }
    ]
  },
  {
    path: '/feeList',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '缴费记录',
      icon: 'el-icon-c-scale-to-original',
      roles: ['sys:feeList']
    },
    children: [
      {
        path: '/myPowerFee',
        component: '/feeList/myPowerFee',
        alwaysShow: false,
        name: 'myPowerFee',
        meta: {
          title: '我的电费',
          icon: 'el-icon-date',
          roles: ['sys:myPowerFee']
        }
      },
      {
        path: '/myWaterFee',
        component: '/feeList/myWaterFee',
        alwaysShow: false,
        name: 'myWaterFee',
        meta: {
          title: '我的⽔费',
          icon: 'el-icon-s-shop',
          roles: ['sys:myWaterFee']
        }
      },
      {
        path: '/myParkFee',
        component: '/feeList/myParkFee',
        alwaysShow: false,
        name: 'myParkFee',
        meta: {
          title: '我的停⻋费',
          icon: 'el-icon-s-finance',
          roles: ['sys:myParkFee']
        }
      }
    ]
  },
  {
    path: '/repairModel',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '维修管理',
      icon: 'el-icon-picture-outline',
      roles: ['sys:repairModel']
    },
    children: [
      {
        path: '/repairList',
        component: '/repair/repairList',
        alwaysShow: false,
        name: 'repairList',
        meta: {
          title: '维修列表',
          icon: 'el-icon-s-marketing',
          roles: ['sys:repairList']
        }
      },
      {
        path: '/myRepair',
        component: '/repair/myRepair',
        alwaysShow: false,
        name: 'myRepair',
        meta: {
          title: '我的维修',
          icon: 'el-icon-picture-outline',
          roles: ['sys:myRepair']
        }
      }
    ]
  }
]
export default menulist
