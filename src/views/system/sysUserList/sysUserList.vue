<template>
  <div class="">
    <Userlist />
    <Table v-bind="tableConfig">
      <template #sex="scope">
        <el-tag :type="scope.row.sex == 1 ? '' : 'success'">
          {{ scope.row.sex == 1 ? '男' : '女' }}
        </el-tag>
      </template>
      <template #isUsed="scope">
        <el-switch
          v-model="scope.row.isUsed"
          :active-value="1"
          :inactive-value="0"
          active-text="是"
          inactive-text="否"
        />
      </template>
      <template #status="scope">
        <el-switch
          v-if="!(scope.row.loginName == 'admin')"
          v-model="scope.row.status"
          :active-value="1"
          :inactive-value="0"
          active-text="是"
          inactive-text="否"
        />
        <span v-else></span>
      </template>
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary"
            >编辑</el-button
          >
          <el-button size="default" icon="EditPen" type="success"
            >分配角色</el-button
          >
          <el-button size="default" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
    </Table>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Userlist from '@/components/menus/Userlist.vue'
import Table from '@/components/tables/Table.vue'
import { tableConfig } from './config/table-config'

const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped></style>
