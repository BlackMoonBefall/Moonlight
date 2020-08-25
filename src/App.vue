<template>
  <div id="app">
    <main-tab-bar/>         <!-- 底部横条 -->
    <router-view/>          <!-- 前端路由页面 -->
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
