<template>
  <div class="about">
    <header
      style="display:flex;background:#545c64;align-items:center;justify-content:space-between;padding: 0 10px"
    >
      <!-- 顶部 -->
      <div style="color:#fff;font-size:20px;line-height:57px">
        <img src="../assets/logo.png" style="width:40px;height:30px:margin:auto" />
        后台管理系统
      </div>
      <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#558ff2"
      >
        <el-submenu index="1">
          <template slot="title">用户</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <a href="javascript::" target="_self">跳转</a>
        </el-menu-item>
      </el-menu>
    </header>
    <section style="height:calc(100vh - 61px);display:flex">
      <nav style="width:200px;background:#545c64">
        <!-- 左部 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#558ff2"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </nav>
      <article style="flex:1;padding:10px">
        <!-- 右部 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: 132,
        name: 123,
        address: 123
      },
      {
        date: 132,
        name: 123,
        address: 123
      },
      {
        date: 132,
        name: 123,
        address: 123
      },]
    };
  },
  methods: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>