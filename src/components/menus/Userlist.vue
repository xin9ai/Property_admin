<template>
  <div class="">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="formInline.region" />
      </el-form-item>

      <el-form-item>
        <el-button :icon="Search" @click="onSubmit">查询</el-button>
        <el-button :icon="Delete" @click="onSubmit">重置</el-button>
        <el-button :icon="Plus" type="primary" @click="onSubmit"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column align="right">
        <template #default="scope">
          <el-button
            type="primary"
            :icon="EditPen"
            size="small"
            @click="add(scope.$index, scope.row)"
            >新增</el-button
          >
          <el-button
            type="success"
            :icon="EditPen"
            size="small"
            @click="set(scope.$index, scope.row)"
            >分配角色</el-button
          >
          <el-button
            :icon="Delete"
            size="small"
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
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Delete, Search, EditPen, Plus } from '@element-plus/icons-vue'
const router = useRouter()
const route = useRoute()
const formInline = reactive({
  user: '',
  region: ''
})
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const onSubmit = () => {
  console.log('submit!')
}
const del = (index, row) => {
  console.log(index, row)
}
const add = (index, row) => {
  console.log(index, row)
}
const set = (index, row) => {
  console.log(index, row)
}
</script>
<style lang="scss" scoped></style>
