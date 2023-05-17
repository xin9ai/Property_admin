<template>
  <Table :TableList="tableList" :TableList2="menuList" :TableStyle="TableStyle">
    <template #type="scope">
      <el-tag v-if="scope.row.type == '0'">目录</el-tag>
      <el-tag type="success" v-else-if="scope.row.type == '1'">菜单</el-tag>
      <el-tag type="danger" v-else>按钮</el-tag>
    </template>
    <template #operation>
      <div style="width: 100%">
        <el-button icon="EditPen" type="primary">编辑</el-button>
        <el-button icon="Delete" type="danger">删除</el-button>
      </div>
    </template>
  </Table>
</template>
<script lang="ts" setup>
import { tableList } from './type/TableList'

import { getUserListApi } from '@/api/Table/TableListapi'
import { ref } from 'vue'

const menuList = ref<Array<[]>>()
const TableStyle = {
  width: '100%',
  height: '530',
  rowKey: 'menuId',
  treeProps: { children: 'children', hasChildren: 'hasChildren' }
}

//请求表格数据
const TableList: any = {
  pageSize: 10,
  currentPage: 1,
  roleName: '',
  total: 0
}
const getMenuList = async () => {
  try {
    const res = await getUserListApi('/menu/list', 'GET')
    menuList.value = res.data
  } catch (error) {
    console.log(error)
  }
}
getMenuList()
</script>
<style lang="scss" scoped></style>
