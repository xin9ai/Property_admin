<template>
  <div class="">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      > -->
    </el-breadcrumb>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped></style>
