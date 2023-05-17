<template>
  <el-table :data="TableList2" border stripe v-bind="TableStyle">
    <el-table-column
      v-for="(item, index) in TableList"
      :key="index"
      v-bind="item"
    >
      <template #default="scope">
        <slot :name="item.slotName" :row="scope.row">{{
          scope.row.username == 'admin' ? '' : scope.row[item.prop]
        }}</slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  TableList: {
    type: Array,
    defined: () => []
  },
  TableList2: {
    type: Array,
    default: () => []
  },
  TableStyle: {
    type: Object,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {}
  }
})
</script>
<style lang="scss" scoped></style>
