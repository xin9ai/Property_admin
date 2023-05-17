<template>
  <Table :TableList="tableList" :TableList2="List" :TableStyle="TableStyle">
    <template #sex="scope">
      <el-tag type="success" v-if="scope.row.sex == '1'">女</el-tag>
      <el-tag v-else>男</el-tag>
    </template>
    <template #status="scope">
      <el-tag type="success" v-if="scope.row.status == '1'">未启用</el-tag>
      <el-tag type="danger" v-else>启用</el-tag>
    </template>
    <template #operation>
      <div style="width: 100%; padding: 5px 0">
        <template v-for="(item, index) in operationList" :key="index">
          <el-button v-bind="item">{{ item.title }}</el-button>
        </template>
      </div>
    </template>
  </Table>
</template>
<script lang="ts" setup>
import { tableList } from './type/TableList'
import { operationList } from './type/TableList'
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
    const res = await getUserListApi('/liveUser/list', 'GET', {
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
