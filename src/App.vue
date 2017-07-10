<template>
    <div id="app" class="wrapper">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <el-row class="container">
             <el-col :span="4">
                  <sidebar></sidebar>
              </el-col>
              <el-col :span="8" class="content">
                  <home></home>
              </el-col>
            </el-row>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue'
    import Home from './components/Home.vue'
    export default{
        components: {
            'sidebar': Sidebar,
            'home': Home
        }
    }
</script>

<style>
    @import "./theme/app.css";
</style>
