<template>
  <el-container>
    <el-aside width="210px">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import Header from '@/components/headers/Header.vue'
</script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background: #304156;
  color: #fff;
}
.el-header {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 3px 0px #ddd;
}
</style>
