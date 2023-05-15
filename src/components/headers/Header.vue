<template>
  <div class="">
    <el-icon size="50">
      <Fold />
      <Expand
    /></el-icon>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped></style>
