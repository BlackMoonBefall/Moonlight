<template>
  <div id="warpper" ref="wrapper"> 
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return{
      scroll:null
    }
  },
  props:{
    pullupload:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper,{
      probeType:3,
      click:true,
      pullUpLoad: this.pullupload,
    })
    //监听滚动位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position);
    })
    //监听下拉加载:仅当需要的时候
    if(this.pullupload){
      this.scroll.on('pullingUp',(position)=>{
        this.$emit('pullingUp');
    })
    }

  },
}
</script>

<style>

</style>