# vue3-virtual-list

## Install

```
yarn add vue3-virtual-table
```

## Example

```html
<template>
  <div class="list-container">
    <VirtualList :data="dataSource">
      <template v-slot="{ item, index }">
        <div class="item-container">
          <div class="cell cell-index">{{ index + 1 }}</div>
          <div class="cell">{{ item.name }}</div>
          <div class="cell">{{ item.email }}</div>
          <div class="cell">{{ item.address }}</div>
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script>
  import { VirtualList } from 'vue3-virtual-list';
  import { mock } from './utils';

  export default {
    name: 'App',
    data() {
      return {
        dataSource: mock(1000),
      };
    },
    components: {
      VirtualList,
    },
  };
</script>

<style>
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
  }
  .cell.cell-index {
    flex: none;
    min-width: 60px;
  }
</style>
```

## Props

| name       | type   | description                                                 | required | default |
| ---------- | ------ | ----------------------------------------------------------- | -------- | ------- |
| data       | Array  | The array of data. Every item is a row.                     | Yes      |         |
| dataKey    | String | Field as key.                                               | No       | id      |
| itemSize   | Number | The height in pixels of each row.                           | No       | 40      |
| poolBuffer | Number | How many rows will be rendered except for the visible ones. | No       | 50      |
