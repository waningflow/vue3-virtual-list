<template>
  <div class="vue3-virtual-table-container">
    <div v-for="item in data" :key="item.id">
      {{ item.name }}/{{ item.email }}/{{ item.address }}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.vue3-virtual-table-container {
  width: 500px;
  height: 200px;
}
</style>
