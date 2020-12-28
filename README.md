# vue3-virtual-list

[![npm](https://img.shields.io/npm/v/vue3-virtual-list.svg)](https://www.npmjs.com/package/vue3-virtual-list)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)

Scroll list for big acount of data. Based on Vue3.

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
    data() {
      return {
        dataSource: mock(100000),
      };
    },
    components: {
      VirtualList,
    },
  };
</script>

<style>
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
</style>
```

## Props

| name       | type   | description                                                 | required | default |
| ---------- | ------ | ----------------------------------------------------------- | -------- | ------- |
| data       | Array  | The array of data. Every item is a row.                     | Yes      |         |
| dataKey    | String | Field as key.                                               | No       | id      |
| itemSize   | Number | The height in pixels of each row.                           | No       | 40      |
| poolBuffer | Number | How many rows will be rendered except for the visible ones. | No       | 50      |
