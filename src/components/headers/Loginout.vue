<template>
  <div class="">
    <el-dropdown @command="handleCommand">
      <img
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        alt=""
      />
      <span class="el-dropdown-link">
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">重置密码</el-dropdown-item>
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 5%;
}
</style>
