<template>
  <div id="home">
    <navi-bar class="home-nav"><div slot="center">月光小站</div></navi-bar>
    首页页面home
    <about></about> 
  </div>  
</template>

<script>
import NaviBar from 'components/common/navibar/NaviBar'
import about from 'components/content/about'
import {getHomeMultidata} from 'network/home'
export default {
  name:'Home',
  components:{
    NaviBar,
    about
  },
  data(){
    return{
      banner:[],
    }
  },
  created(){                        //在创建这个组件的时候，应该立刻发送请求
    getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
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