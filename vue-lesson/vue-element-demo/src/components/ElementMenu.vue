<template>
  <div class="menu-wrap">
    <!-- <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><span slot="title">导航二</span></el-menu-item>
      <el-menu-item index="3"><span slot="title">导航三</span></el-menu-item>
      <el-menu-item index="4"><span slot="title">导航四</span></el-menu-item>
    </el-menu> -->
    <el-menu class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <MenuItem :menuData="menu" />
    </el-menu>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
  components: { MenuItem },
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "菜单1",
          list: [
            {
              id: 3,
              name: "菜单1-1",
            },
            {
              id: 4,
              name: "菜单1-2",
              list: [
                {
                  id: 6,
                  name: "菜单1-2-1",
                },
                {
                  id: 7,
                  name: "菜单1-2-2",
                },
              ],
            },
            {
              id: 5,
              name: "菜单1-3",
            },
          ],
        },
        {
          id: 2,
          name: "菜单2",
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu-wrap {
  width: 210px;
  margin-left: 200px;
}

</style>