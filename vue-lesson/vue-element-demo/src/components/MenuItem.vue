<template>
  <el-menu>
    <el-submenu index="1">
      <template slot="title">导航一</template>
      <el-menu-item index="1-1">选项1</el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><span slot="title">导航二</span></el-menu-item>
    <el-menu-item index="3"><span slot="title">导航三</span></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MenuItem",
  props: ['menuData']
};
</script>

<style>
</style>