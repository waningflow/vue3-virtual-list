<template>
  <div
    class="vue3-virtual-list-container"
    ref="root"
    @scroll.passive="handleScroll"
  >
    <div class="vue3-virtual-list-scroll" :style="`height: ${scrollHeight}px`">
      <div
        v-for="(item, index) in pool"
        :key="item.id"
        :style="`height: ${itemSize}px`"
      >
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, toRefs, reactive, defineComponent, onMounted } from "vue";

interface Props {
  data: any[];
  dataKey: string;
  itemSize: number;
  poolBuffer: number;
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
    poolBuffer: {
      type: Number,
      default: () => 50
    }
  },
  setup(props: Props): any {
    const { data, poolBuffer, itemSize } = toRefs(props);
    const root = ref<HTMLElement | null>(null);
    const pool = ref<any[]>([]);
    const scrollHeight = ref(data.value.length * itemSize.value);
    let containerSize = 0;

    const handleScroll = () => {
      if (!root.value) return;
      console.log(root.value.scrollTop);
    };

    onMounted(() => {
      containerSize = root.value ? root.value["offsetHeight"] : 0;
      const contentLines = Math.ceil(containerSize / itemSize.value);
      const totalLines = contentLines + poolBuffer.value;
      const range = [0, totalLines];
      pool.value = data.value.slice(range[0], range[0] + range[1]);
    });

    return { pool, scrollHeight, root, handleScroll };
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
