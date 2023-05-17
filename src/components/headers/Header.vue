<template>
  <div class="head">
    <div class="left">
      <el-icon size="30"> <Expand /></el-icon>
      <Breadcrumb />
    </div>
    <Loginout />
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
}
</style>
