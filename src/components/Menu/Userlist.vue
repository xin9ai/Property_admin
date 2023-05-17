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
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const formInline = reactive({
  user: '',
  region: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style lang="scss" scoped></style>
