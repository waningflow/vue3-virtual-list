<template>
  <div class="vue3-virtual-list-container">
    <div class="vue3-virtual-list-scroll">
      <div v-for="(item, index) in pool" :key="item.id">
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, toRefs, reactive, defineComponent } from "vue";

interface Props {
  data: any[];
  dataKey: string;
  itemSize: number;
  poolSize: number;
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
    },
    poolSize: {
      type: Number,
      default: () => 100
    }
  },
  setup(props: Props): any {
    // const { data, poolSize } = toRefs(props);
    const range = [0, props.poolSize];
    const pool = ref(props.data.slice(range[0], range[0] + range[1]));
    return { pool };
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
