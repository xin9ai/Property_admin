<template>
  <div>
    <el-table :data="tableList" border stripe style="width: 100%">
      <el-table-column prop="roleName" label="姓名"></el-table-column>
      <el-table-column prop="remark" label="电话"></el-table-column>
      <el-table-column label="操作" width="320px">
        <template #default="scope">
          <el-button
            type="primary"
            :icon="EditPen"
            @click="add(scope.$index, scope.row)"
            >新增</el-button
          >
          <el-button
            type="success"
            :icon="EditPen"
            @click="set(scope.$index, scope.row)"
            >分配角色</el-button
          >
          <el-button
            :icon="Delete"
            type="danger"
            @click="del(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import Table from '@/components/tables/Table.vue'
import { ref } from 'vue'
import { tableConfig } from './config/table-config'
import { Delete, Search, EditPen, Plus } from '@element-plus/icons-vue'

const tableList = ref([
  {
    roleId: 5,
    roleName: '管理员角色',
    remark: '管理员角色'
  },
  {
    roleId: 6,
    roleName: '水费管理员',
    remark: '收水费'
  },
  {
    roleId: 8,
    roleName: '业主',
    remark: '租住房子的人'
  }
])
</script>

<style scoped></style>
