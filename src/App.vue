<template>
  <VueVirtualList :data="dataSource">
    <template v-slot="{ item }">
      {{ item.name }}/{{ item.email }}/{{ item.address }}
    </template>
  </VueVirtualList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueVirtualList from "./vue3-virtual-list.vue";
import { mock } from "./utils";

export default defineComponent({
  name: "App",
  data() {
    return {
      dataSource: mock(10000)
    };
  },
  components: {
    VueVirtualList
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
