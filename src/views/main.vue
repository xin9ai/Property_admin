<template>
  <div class="">
    <el-container>
      <el-aside width="200px"><Menu></Menu></el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Menu from '@/components/menus/Menu.vue'
import Header from '@/components/headers/Header.vue'
const router = useRouter()
const route = useRoute()
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
}
</style>
