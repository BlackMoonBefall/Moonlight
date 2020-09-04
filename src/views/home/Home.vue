<template>
  <div id="home">
    <navi-bar class="home-nav"><div slot="center">月光小站</div></navi-bar>
    <tab-control :titles="['推荐','热门','排行榜']" 
                    @getCurrentType="getCurrentT" 
                    v-show="isTabFixed"
                    class="copyTab"
                    ref="tabcon2">
    </tab-control>
    <!-- 为了起到吸顶的效果，多复制的一份↑ -->
    <scroll class="content" 
            ref="scroll" 
           @scroll="isShowBT"
           :pullupload="true"
           @pullingUp="loadMore">
      <home-swiper :banners="banners" @banLoad="bimgload"></home-swiper>
      <recommand-view :recommends="recommends"></recommand-view>
      <feature-view/>
      <tab-control :titles="['推荐','热门','排行榜']" 
                    @getCurrentType="getCurrentT" 
                    ref="tabcon1">
      </tab-control>
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
      scrollobj: {},
      taboffset: 0,
      isTabFixed: false,
      nowScrollon:0,
      leaveScrollon:0,
    }
  },
  created(){                        //在创建这个组件的时候，应该立刻发送请求数据
    this.getHomeMulti()
    this.getHomeGoods('rec')
    this.getHomeGoods('hot')
    this.getHomeGoods('rank')
  },
  mounted(){
    this.$bus.$on('readyUpdate',()=>{
      this.$refs.scroll.scroll.refresh() //载入一张图就刷新一次
    })


  },
  activated(){                   //进来时载入离开时保存的位置
    this.$refs.scroll.scroll.refresh()  //刷新一下再滚动到原位置，否则一点击就会触发回顶部bug
    this.$refs.scroll.scroll.scrollTo(0,this.leaveScrollon,10)
  },
  deactivated(){              //离开保存位置
    this.leaveScrollon = this.nowScrollon 
  },
  methods:{
    bimgload(){
      //就延时一下下等图片加载完
      setTimeout(()=>{
        this.taboffset = this.$refs.tabcon1.$el.offsetTop
        console.log(this.taboffset);
      },90)
    },
    isShowBT(position){
      //返回按钮的显示
      this.isShow = (-position.y) > 1000

      //tab-control的吸顶效果
      this.isTabFixed = (-position.y) > this.taboffset

      //为了保存当前滚动到哪里
      this.nowScrollon = position.y
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    getCurrentT(index){
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
      this.$refs.tabcon1.currentIndex = index
      this.$refs.tabcon2.currentIndex = index
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
        alert('Emm~似乎没有更多内容了噢')
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
.copyTab{
  position: relative;
  z-index: 9;
}

</style>