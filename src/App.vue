<template>
  <div id="app">
    <main-tab-bar/>         <!-- 底部横条 -->
    <keep-alive exclude="Detail,Collect">
      <router-view/>          <!-- 前端路由页面 -->
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'


export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}







</script>

<style>
@import "assets/css/base.css";
</style>
