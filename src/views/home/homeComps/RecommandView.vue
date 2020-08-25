<template>
  <div id="home-recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.index">
      <a href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommandView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
  

<style>
  #home-recommend{
    display: flex;
    padding: 10px 0px 15px 0px;
    border-bottom: 10px solid rgb(229, 226, 226);
    text-align: center;
  }
  .recommend-item{
    flex:1;
    font-size: 14px;
  }
  .recommend-item img {
     width: 68px;
  }
  .recommend-item div{
    margin-top: 5px;
  }
</style>