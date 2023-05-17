<template>
  <Table :TableList="tableList" :TableList2="List" :TableStyle="TableStyle">
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

const List = ref<Array<[]>>()
const TableStyle = {
  width: '100%'
}

//请求表格数据
const TableList: any = {
  buildNme: '',
  unitName: '',
  currentPage: 1,
  pageSize: 10,
  total: 0
}
const getList = async () => {
  try {
    const res = await getUserListApi('/houseUnit/list', 'GET', {
      ...TableList
    })
    List.value = res.data.records
  } catch (error) {
    console.log(error)
  }
}
getList()
</script>
<style lang="scss" scoped></style>
