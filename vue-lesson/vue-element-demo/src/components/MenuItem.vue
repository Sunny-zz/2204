<template>
  <div>
    <!-- <el-submenu index="1">
      <template slot="title">导航一</template>
      <el-menu-item index="1-1">选项1</el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><span slot="title">导航二</span></el-menu-item>
    <el-menu-item index="3"><span slot="title">导航三</span></el-menu-item> -->
    <template v-for="item in menuData">
      <el-submenu :key="item.id" :index="String(item.id)" v-if="item.list">
        <template slot="title">{{ item.name }}</template>
        <MenuItem :menuData="item.list" />
      </el-submenu>
      <el-menu-item :key="item.id" v-else :index="String(item.id)">
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["menuData"],
};
</script>

<style>
.el-submenu .el-menu-item {
  min-width: 0;
}
</style>