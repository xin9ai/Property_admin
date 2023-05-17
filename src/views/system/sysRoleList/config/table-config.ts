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
      label: '角色名称',
      prop: 'roleName'
    },
    {
      id: 2,
      label: '备注',
      prop: 'remark'
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
