// table的配置项
export const tableConfig = {
  // showIndexColumn: true,
  // showSelectionColumn: true,
  // showExpandColumn: true,
  tableParams: {
    height: '460',
    rowKey: 'menuId',
    treeProps: { children: 'children', hasChildren: 'hasChildren' },
    lazy: true
  },
  propList: [
    {
      id: 1,
      label: '菜单名称',
      prop: 'menuLabel'
    },
    {
      id: 2,
      label: '菜单类型',
      prop: 'type',
      slotName: 'menuType'
    },
    {
      id: 2,
      label: '菜单图标',
      prop: 'icon'
    },
    {
      id: 2,
      label: '路由名称',
      prop: 'name'
    },
    {
      id: 2,
      label: '路由地址',
      prop: 'path'
    },
    {
      id: 2,
      label: '组件路径',
      prop: 'url'
    },
    {
      id: 2,
      label: '权限字段',
      prop: 'menuCode'
    },
    {
      id: 7,
      label: '操作',
      align: 'center',
      width: 310,
      slotName: 'action'
    }
  ]
}
