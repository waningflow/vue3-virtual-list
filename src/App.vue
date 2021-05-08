<template>
  <div>
    <div class="action-container">
      <input v-model="dataCount" />
      <button @click="updateDataSource">Update</button>
    </div>
    <div class="list-container">
      <VueVirtualList :data="dataSource">
        <template v-slot="{ item, index }">
          <div class="item-container">
            <div class="cell cell-index">{{ index + 1 }}</div>
            <!-- <div class="cell cell-img"><img :src="item.img" /></div> -->
            <div class="cell">{{ item.name }}</div>
            <div class="cell">{{ item.email }}</div>
            <div class="cell">{{ item.address }}</div>
          </div>
        </template>
      </VueVirtualList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueVirtualList from "./vue3-virtual-list.vue";
import { mock } from "./utils";

export default defineComponent({
  name: "App",
  data() {
    return {
      dataCount: 10000,
      dataSource: mock(10000)
    };
  },
  components: {
    VueVirtualList
  },
  methods: {
    updateDataSource() {
      this.dataSource = mock(this.dataCount);
    }
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
.list-container {
  width: 800px;
  height: 600px;
  border: 2px solid #4caf50;
  margin: 0 auto;
}
.item-container {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.cell {
  margin: 0 8px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  white-space: nowrap;
  &.cell-index,
  &.cell-img {
    flex: none;
    min-width: 60px;
  }
}
.action-container {
  margin-bottom: 16px;
  button {
    margin-left: 10px;
  }
}
</style>
