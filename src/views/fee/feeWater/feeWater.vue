<template>
  <Table :TableList="tableList" :TableList2="List" :TableStyle="TableStyle">
    <template #payWaterStatus="scope">
      <el-tag type="success" v-if="scope.row.payWaterStatus == '1'"
        >已缴费</el-tag
      >
      <el-tag type="danger" v-else>未缴费</el-tag>
    </template>
    <template #operation="scope">
      <div style="width: 100%; padding: 5px 0">
        <el-button type="primary">编辑</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="warning" v-if="scope.row.payWaterStatus != '1'"
          >缴费</el-button
        >
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
  width: '100%',
  height: '600px'
}

//请求表格数据
const TableList: any = {
  currentPage: 1,
  pageSize: 10,
  total: 0
}
const getList = async () => {
  try {
    const res = await getUserListApi('/feeWater/list', 'GET', {
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
