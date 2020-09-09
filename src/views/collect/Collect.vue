<template>
  <div id="collect">
    <navi-bar class="collect-nav">
      <div slot="center">收藏夹</div>
      <div slot="right" @click="manageColl"><button class="btn">管理</button></div>
    </navi-bar>
    <scroll class="content">
      <collect-item v-for="item in collections" :key="item.index" :item="item" :isShowMana="isShowMana"/>
      <div v-if="collections.length == 0" class="info">收藏夹里空空如也，到详情页面添加收藏吧~</div>
    </scroll >
  </div>  
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NaviBar from 'components/common/navibar/NaviBar'

import CollectItem from './collectComps/CollectItem'

export default {
  name:'Collect',
  data(){
    return{
      collections:[],
      isShowMana: false
    }
  },
  mounted(){
    //每次切到页面重新读取一次收藏的内容，不keep-alive
    this.collections = this.$store.state.collections



  },
  methods:{
    manageColl(){
      this.isShowMana = !this.isShowMana
    }
  },
  components:{
    CollectItem,
    NaviBar,
    Scroll,
  }
}
</script>

<style scoped>
.collect-nav{
  background-color: rgb(223, 202, 238);
  color: #fff;
}

.info{
  font-size: 14px;
  margin: 250px 0 0 50px;

}

.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}
.btn{
  outline:none;
  font-size: 16px;
  border-radius: 10px;
  padding: 3px;
  color: rgb(255, 255, 255) ;
  background-color: rgb(223, 202, 238);
  border: 2px solid rgb(245, 244, 244);
}
</style>