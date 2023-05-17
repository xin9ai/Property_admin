// table的配置项
export const tableConfig = {
  // showIndexColumn: true,
  // showSelectionColumn: true,
  // showExpandColumn: true,
  tableParams: {
    size: 'small',
    height: '460'
  },
  propList: [
    {
      id: 1,
      label: '姓名',
      prop: 'loginName',
      slotName: 'loginName'
    },
    {
      id: 2,
      label: '电话',
      prop: 'phone',
      slotName: 'phone'
    },
    {
      id: 3,
      label: '身份证',
      prop: 'idCard',
      slotName: 'idCard',
      width: 180
    },
    {
      id: 4,
      label: '性别',
      prop: 'sex',
      slotName: 'sex',
      align: 'center'
    },
    {
      id: 5,
      label: '是否离职',
      prop: 'isUsed',
      slotName: 'isUsed',
      align: 'center'
    },
    {
      id: 6,
      label: '是否启用',
      prop: 'status',
      slotName: 'status',
      align: 'center'
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
