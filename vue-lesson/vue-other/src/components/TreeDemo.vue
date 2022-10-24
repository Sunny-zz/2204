<template>
  <div style="margin-left: 200px;">
    <h3>递归组件</h3>
    <TreeItem :treeData='treeData' />
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue';
export default {
  components: { TreeItem },
  data() {
    return {
      // 树形数组
      // 想要将树形数组数据展示的话 就需要递归
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  created () {
    console.log(this.treeData);
  },
};
</script>

<style>
</style>