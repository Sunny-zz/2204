<template>
  <div>
    <h3>作用域插槽</h3>
    <!-- 因为我们想要的表格需要自定义内容 -->
    <TableDemo :tableData='tableData' x='name' >
      <template #thead>
        <th>日期</th>
        <th>姓名</th>
        <th>地址</th>
      </template>
      <!-- 自定义姓名的展示 -->
      <!-- slotsProps 接收的就是子组件给 slot 传递所有 prop 组成的对象 -->
      <template #name='slotsProps' >
        <span class="name">{{slotsProps.value}}</span>
      </template>
    </TableDemo>
  </div>
</template>

<script>
import TableDemo from './TableDemo.vue';
export default {
  components: { TableDemo },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style>
.name {
  border: 1px solid #ccc;
}
</style>