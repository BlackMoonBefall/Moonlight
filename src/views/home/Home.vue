<template>
  <div id="home">
    <navi-bar class="home-nav"><div slot="center">月光小站</div></navi-bar>
    <scroll class="content" 
            ref="scroll" 
           @scroll="isShowBT"
           :pullupload="true"
           @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommand-view :recommends="recommends"></recommand-view>
      <feature-view/>
      <tab-control :titles="['推荐','热门','排行榜']" @getCurrentType="getCurrentT"></tab-control>
      <goods-list :goods="goods[currentType].list" ></goods-list>
      <about></about> 
    </scroll>
    <back-top ref="back" @click.native="backTop" v-show="isShow"></back-top>
  </div>  
</template>

<script>
import {
  getHomeMultidata,
  getHomeGoodsData      
  } from 'network/home' 
import {debounce} from 'common/utils'     // 暂时用不到


import NaviBar from 'components/common/navibar/NaviBar'
import Scroll from 'components/common/scroll/Scroll'
import about from 'components/content/about'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

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
    GoodsList,
    Scroll,
    BackTop,
  },
  data(){
    return{
      banners:[],
      recommends:[],
      currentType: 'rec',
      goods:{
        'rec':{page:0,list:[]},
        'hot':{page:0,list:[]},
        'rank':{page:0,list:[]},
      },
      isShow:false,
      scrollobj: {}

    }
  },
  created(){                        //在创建这个组件的时候，应该立刻发送请求数据
    this.getHomeMulti()
    this.getHomeGoods('rec')
    this.getHomeGoods('hot')
    this.getHomeGoods('rank')
  },
  mounted(){
    //拿到scroll组件里的scroll对象,传入到debounce工具里，得到一个延迟执行函数
    this.$bus.$on('readyUpdate',()=>{
      this.$refs.scroll.scroll.refresh()
    })
  },
  methods:{
    isShowBT(position){
      this.isShow = (-position.y) > 1000
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    getCurrentT(index){
      console.log(index);
      switch(index){
        case 0:
          this.currentType = 'rec'
          break
        case 1:
          this.currentType = 'hot'
          break
        case 2:
          this.currentType = 'rank'
          break
      }
    },
    getHomeMulti(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      let page = this.goods[type].page + 1
      getHomeGoodsData(page).then(res => {
        this.goods[type].list.push(...res.data.goods[type].list)
        this.goods[type].page += 1

        //加载成功后调用完成方法
        this.$refs.scroll.scroll.finishPullUp()
      }).catch(err => {       
        //即使加载失败后也调用完成方法
        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    loadMore(){
      console.log("is loading more!!");
      this.getHomeGoods(this.currentType)
    },

  },
}
</script>

<style scoped>
.home{
   padding-top: 44px ;
   position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}
</style>