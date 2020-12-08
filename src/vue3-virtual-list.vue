<template>
  <div class="vue3-virtual-table-container">
    <div v-for="(item, index) in data" :key="item.id">
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueVirtualList",
  props: {
    data: Array
  }
});
</script>

<style scoped lang="less">
.vue3-virtual-table-container {
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
  overflow: auto;
}
</style>
