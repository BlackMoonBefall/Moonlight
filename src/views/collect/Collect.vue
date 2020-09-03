<template>
  <div id="collect">
    <navi-bar class="collect-nav"><div slot="center">收藏夹</div></navi-bar>
    <scroll class="content">
      <collect-item v-for="(item,index) in collections" :key="item.index" :item="item" :index="index"/>
      <div v-show="!collections" >收藏夹里还没有内容，请到详情页面添加~</div>
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
    }
  },
  mounted(){
    //每次切到页面重新读取一次收藏的内容，不keep-alive
    this.collections = this.$store.state.collections



  },
  methods:{
    
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

.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}
</style>