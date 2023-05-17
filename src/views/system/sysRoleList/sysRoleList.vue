<template>
  <Table :TableList="tableList" :TableList2="roleList" :TableStyle="TableStyle">
    <template #operation>
      <div style="width: 100%">
        <el-button icon="EditPen" type="primary">编辑</el-button>
        <el-button icon="EditPen" type="success">分配权限</el-button>
        <el-button icon="Delete" type="danger">删除</el-button>
      </div>
    </template>
  </Table>
</template>
<script lang="ts" setup>
import { tableList } from './type/TableList'

import { getUserListApi } from '@/api/Table/TableListapi'
import { ref } from 'vue'

const roleList = ref<Array<[]>>()
const TableStyle = {
  size: 'default'
}

//请求表格数据
const TableList: any = {
  pageSize: 10,
  currentPage: 1,
  roleName: '',
  total: 0
}
const getRoleList = async () => {
  try {
    const res = await getUserListApi('/role/list', 'GET', { ...TableList })
    roleList.value = res.data.records
  } catch (error) {
    console.log(error)
  }
}
getRoleList()
</script>
<style lang="scss" scoped></style>
