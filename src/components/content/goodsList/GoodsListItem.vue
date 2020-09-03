<template>
  <div id="goods-list-item" @click="itemDetail">
    <a href="#">
    <div class="goods-item"><img :src="citem.show.img" alt="SORRYYY" @load="imgLoad"></div>
    <div class="goods-info">
      <p><b>{{citem.title}}</b></p>
      <div><b>作者：{{citem.author}}</b></div>
      <div>人气：{{citem.fav}}</div>
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
    },
    itemDetail(){
      this.$router.push('/detail/' + this.citem.iid)
    },
  }
}
</script>

<style scoped>
  #goods-list-item{
    text-align: center;
    width: 49%;
		height: auto;
		padding-top: 6px;
		font-size: 14px;
  }
  .goods-item img{
    border-radius: 8px;
    width: 80%;
    box-shadow: 5px 3px 6px;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }

 .goods-info{
    margin: 10px 0 10px 0;
 }

</style>