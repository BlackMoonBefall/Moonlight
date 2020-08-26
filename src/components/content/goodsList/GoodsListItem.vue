<template>
  <div id="goods-list-item">
    <a href="#">
    <div class="goods-item"><img :src="citem.show.img" alt="SORRYYY" @load="imgLoad"></div>
    <div class="goods-info">
      <p>{{citem.title}}</p>
      <span>价格：{{citem.price}}￥</span>
      <span>收藏：{{citem.fav}}</span>
    </div>
    </a>
    
  </div>  
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    citem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('readyUpdate')
    }
  }
}
</script>

<style scoped>
  #goods-list-item{
    width: 49%;
		height: auto;
		padding-top: 6px;
		font-size: 14px;
  }
  .goods-item img{
    border-radius: 8px;
    width: 100%;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>