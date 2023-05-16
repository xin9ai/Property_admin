<template>
  <div class="">
    <Userlist />
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRef, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Userlist from '@/components/menus/Userlist.vue'

const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped></style>
