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
        <el-button icon="Search" @click="onSubmit">查询</el-button>
        <el-button icon="Delete" @click="onSubmit" style="color: #ff7670"
          >重置</el-button
        >
        <el-button icon="Plus" type="primary" @click="onSubmit">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableDatalist" border stripe style="width: 100%">
      <el-table-column prop="loginName" label="姓名"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column
        prop="idCard"
        label="身份证"
        width="180px"
      ></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template #default="scope">
          <el-tag :type="scope.row.sex == 1 ? '' : 'success'">{{
            scope.row.sex == 1 ? '男' : '女'
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="isUsed" label="是否离职">
        <template #default="scope">
          <el-switch
            v-model="scope.row.isUsed"
            active-value="1"
            inactive-value="0"
            active-text="是"
            inactive-text="否"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="status[1]" label="是否启用">
        <template #default="scope">
          <template v-if="scope.row.loginName != 'admin'">
            <el-switch
              v-model="scope.row.status"
              active-value="1"
              inactive-value="0"
              active-text="是"
              inactive-text="否"
            ></el-switch>
          </template>
        </template>
      </el-table-column>
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
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Delete, Search, EditPen, Plus } from '@element-plus/icons-vue'
import { getuserlist } from '@/api/api.ts'
const router = useRouter()
const route = useRoute()
const tableDatalist = ref([])
const formInline = reactive({
  user: '',
  region: ''
})

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

const form = {
  loginName: '',
  phone: '',
  curentPage: 1,
  pageSize: 10,
  total: 0
}
onMounted(() => {
  getuserlist(form).then((res) => {
    console.log(res)
    tableDatalist.value = res.data.records
  })
})
</script>
<style lang="scss" scoped></style>
