<template>
  <div class="vue3-virtual-list-container">
    <div class="vue3-virtual-list-scroll">
      <div v-for="(item, index) in data" :key="item.id">
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  data?: any[];
  dataKey?: string;
  itemSize?: number;
}

export default defineComponent({
  name: "VueVirtualList",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    dataKey: {
      type: String,
      default: () => "id"
    },
    itemSize: {
      type: Number,
      default: () => 40
    }
  }
});
</script>

<style scoped lang="less">
.vue3-virtual-list-container {
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
  overflow: auto;
}
</style>
