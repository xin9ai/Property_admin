<template>
  <div class="menu">
    <el-menu
      active-text-color="#3e98f5"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <el-menu-item class="bgs">
        <img
          src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
          alt=""
        />
        <h2>物业管理系统</h2>
      </el-menu-item>
      <el-menu-item index="/dashboard">
        <el-icon><location /></el-icon>首页</el-menu-item
      >

      <el-sub-menu
        :index="item.path"
        v-for="(item, index) in menulist"
        :key="index"
      >
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item
          :index="ele.path"
          v-for="(ele, index) in item.children"
          :key="index"
          >{{ ele.meta.title }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import menulist from './menulist'
const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped>
.bgs {
  background-color: #2b2f3a;
}
img {
  width: 35px;
  height: 35px;
  margin: 5px;
}
</style>
