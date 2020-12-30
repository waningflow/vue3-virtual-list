import Vue from "vue";

declare class VirtualList extends Vue {
  data: any[];
  dataKey: string;
  itemSize: number;
  poolBuffer: number;
}

export { VirtualList };
