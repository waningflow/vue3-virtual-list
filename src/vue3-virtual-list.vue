<template>
  <div class="vue3-virtual-table-container">
    vvv
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueVirtualList",
  props: {
    msg: String
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
