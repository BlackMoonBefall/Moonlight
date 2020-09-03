<template>
  <div id="home-recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.index">
      <div @click="toalert" >
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
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
  },
  methods:{
    toalert(){
      alert('分类目前正在整合中~')
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
    background-color: #fff;
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