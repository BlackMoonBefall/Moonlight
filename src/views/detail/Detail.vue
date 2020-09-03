<template>
  <div id="detail">
    <navi-bar class="navi-bar">
      <div slot="left" class="navi-bar-left"><img src="~assets/img/back/back.png" alt="" 
        @click="backhome">
      </div>
      <div slot="center" class="navi-bar-center">
        <div v-for="(item,index) in detailnavi" :key="index" 
        :class="{active: index === currentIndex}"
        @click="detailSe(index)" >{{item}}</div>
      </div>
    </navi-bar>
    <scroll class="content" 
            ref="scroll" 
           @scroll="isShowBTandChangeSe">
      <detail-shower :detbanner="detbanner" @banLoad="bimgload"/>
      <detail-author/>
      <detail-comment/>
      <detail-recommend/>
    </scroll>
    <detail-bot-bar :passtoColl="passtoColl"/>
    <back-top ref="back" @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import {getDetailData} from 'network/detail'

import NaviBar from 'components/common/navibar/NaviBar'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import DetailShower from './detailComps/DetailShower'
import DetailAuthor from './detailComps/DetailAuthor'
import DetailComment from './detailComps/DetailComment'
import DetailRecommend from './detailComps/DetailRecommend'
import DetailBotBar from './detailComps/DetailBotBar'




export default {
  name:'Detail',
  data(){
    return{
      detailnavi:['详情','作者','评论','推荐'],
      detailindex:[0,273,479,884,10000],
      detbanner:'',
      currentIndex: 0,
      isShow: false,
      passtoColl:{} 
    }
  },
  created(){
    this.getDetail()
  },
  methods:{
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    isShowBTandChangeSe(position){
      this.isShow = (-position.y) > 500
      //检测滚动不用太频繁
      setTimeout(()=>{
        for(let i=0; i<this.detailindex.length-1; i++){
          if((-position.y)>this.detailindex[i] && (-position.y)<this.detailindex[i+1] ){
            switch(i){
              case 0:
                this.currentIndex = 0
                break
              case 1:
                this.currentIndex = 1
                break
              case 2:
                this.currentIndex = 2
                break
              case 3:
                this.currentIndex = 3
                break                            
            }
          }
        }
      },100)

     
    },
    getDetail(){
      getDetailData(this.$route.params.iid).then(res => {
        //详情图给详情页面，解构赋值
        this.detbanner = res.data.show.img
        //返回的数据
        this.passtoColl = res
      })
    },
    bimgload(){
      console.log('详情图加载成功');
      //这里应该还要干些什么来着？？
     
    },
    detailSe(index){
      this.currentIndex = index
      this.$refs.scroll.scroll.scrollTo(0,-(this.detailindex[index]+1),300) //+1是稍微偏移多一点，让检测的联动效果落入区间
    },
    backhome(){
      this.$router.go(-1)
    }
  },
  components:{
    NaviBar,
    DetailShower,
    DetailAuthor,
    DetailComment,
    DetailRecommend,
    DetailBotBar,
    Scroll,
    BackTop,
  },
}


</script>

<style scoped>

.active{
  color: red;
}
.navi-bar{
  display: flex;
  background: rgb(243, 238, 238);;
}
.navi-bar-left{
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navi-bar-left img{
  padding: 2px;
  border-radius: 50%;
  border: 1px solid rgb(151, 144, 158);
  width: 50%;
} 
.navi-bar-center{
  display: flex;
}
.navi-bar-center div{
  flex: 1;
}
.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}
#detail{
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}



</style>