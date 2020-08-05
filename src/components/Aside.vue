<template>
  <div class="aside">
      <el-menu class="menu">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-1">选项2</el-menu-item>
        <el-submenu index="1-3">
          <template slot="title">选项4</template>
          <el-menu-item index="1-3-1">选项1</el-menu-item>
          <el-menu-item index="1-3-2">选项2</el-menu-item>
          <el-menu-item index="1-3-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-1">选项2</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">选项4</template>
          <el-menu-item index="2-3-1">选项1</el-menu-item>
          <el-menu-item index="2-3-2">选项2</el-menu-item>
          <el-menu-item index="2-3-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.aside{
    width: 200px;
    background-color: rgb(255, 255, 255);
    border: 10px;

}
.menu{
    bottom: 0px;
}
</style>
