<template>
  <div id="home">
    <navi-bar class="home-nav"><div slot="center">月光小站</div></navi-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommand-view :recommends="recommends"></recommand-view>
    <feature-view/>
    <tab-control :titles="['推荐','热门','排行榜']"></tab-control>
    <about></about> 
    <ul>
      <li>---</li>
      <li>---</li>
      <li>---</li>
      <li>---</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      <li>站位</li>
      
    </ul>
  </div>  
</template>

<script>
import {getHomeMultidata} from 'network/home' 

import NaviBar from 'components/common/navibar/NaviBar'
import about from 'components/content/about'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './homeComps/HomeSwiper'
import RecommandView from './homeComps/RecommandView'
import FeatureView from './homeComps/FeatureView'

export default {
  name:'Home',
  components:{
    NaviBar,
    about,
    TabControl,
    HomeSwiper,
    RecommandView, 
    FeatureView,
  },
  data(){
    return{
      banners:[],
      recommends:[],
    }
  },
  created(){                        //在创建这个组件的时候，应该立刻发送请求
    getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>