<template>
  <div class="vue3-virtual-table-container">
    <div v-for="item in data" :key="item.id">
      <slot :item="item"></slot>
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
  width: 500px;
  height: 200px;
}
</style>
