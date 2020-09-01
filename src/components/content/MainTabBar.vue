<template>
    <tab-bar>
      <tab-bar-item path="/home" acticolor="red">
        <img slot="item-icon-active" src="~/assets/img/tabbar/home_active.png" alt="">
        <img slot="item-icon" src="~/assets/img/tabbar/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/rank" acticolor="red">
        <img slot="item-icon-active" src="~/assets/img/tabbar/cart_active.png" alt="">
        <img slot="item-icon" src="~/assets/img/tabbar/cart.png" alt="">
        <div slot="item-text">排行</div>
      </tab-bar-item>
      <tab-bar-item path="/collect" acticolor="red"> <!-- acticolor="red" 是可以缺省的值-->
          <img slot="item-icon-active" src="~/assets/img/tabbar/favo_active.png" alt="">
        <img slot="item-icon" src="~/assets/img/tabbar/favo.png" alt="">
        <div slot="item-text">收藏</div>
      </tab-bar-item>
      <tab-bar-item path="/user" acticolor="red">
        <img slot="item-icon-active" src="~/assets/img/tabbar/me_active.png" alt="">
        <img slot="item-icon" src="~/assets/img/tabbar/me.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>  
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
} 
</script>

<style>

</style>