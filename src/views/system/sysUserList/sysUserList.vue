<template>
  <div>
    <Userlist />
    <Table
      :TableList="tableList"
      :TableList2="userList"
      :TableStyle="TableStyle"
    >
      <!-- 性别 -->
      <template #sex="scope">
        <el-tag :type="scope.row.sex == '1' ? '' : 'success'">
          {{ scope.row.sex == '1' ? '男' : '女' }}</el-tag
        >
      </template>
      <!-- 在职状态 -->
      <template #isUsed="scope">
        <el-switch
          v-model="scope.row.isUsed"
          active-value="1"
          active-text="是"
          inactive-text="否"
        />
      </template>
      <!-- 启用状态 -->
      <template #status="scope">
        <el-switch
          v-if="!(scope.row.loginName == 'admin')"
          v-model="scope.row.status"
          active-value="1"
          active-text="是"
          inactive-text="否"
        />
        <span v-else></span>
      </template>
      <template #action>
        <el-button icon="EditPen" type="primary">编辑</el-button>
        <el-button icon="EditPen" type="success">分配角色</el-button>
        <el-button icon="Delete" type="danger">删除</el-button>
      </template>
    </Table>
  </div>
</template>
<script lang="ts" setup>
import { tableList } from './type/TableList'
import { getUserListApi } from '@/api/Table/TableListapi'
import Userlist from '@/components/Menu/Userlist.vue'
import { ref } from 'vue'
const userList = ref<Array<[]>>()
const TableStyle = {
  size: 'default',
  height: 420
}

//请求表格数据
const TableList = {
  curentPage: 1,
  pageSize: 10,
  total: 0
}
const getUserList = async () => {
  try {
    const res = await getUserListApi('/user/list', 'GET', { ...TableList })
    userList.value = res.data.records
  } catch (error) {
    console.log(error)
  }
}
getUserList()
</script>
<style lang="scss" scoped></style>
