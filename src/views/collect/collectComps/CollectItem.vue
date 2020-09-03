<template>
  <div id="collect-item">
    <div class="colimg"><img :src="item.show.img" alt=""></div>
    <div>第{{index+1}}本书,书的编号：{{item.iid}}</div> 
  </div>  
</template>

<script>
export default {
  name:'CollectItem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    },
     index:{
      type:Number,
      default(){
        return 0
      }
    },
  },

}
</script>

<style scoped>
#collect-item{
  font-size: 17px;
  background-color: rgb(213, 228, 235);
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  border-top: 2px solid gray;
  margin: 4px 0 0 20px;
}

.colimg img{
  box-shadow: -2px 2px 4px rgba(0,0,0,.3);
  position: relative;
  border-radius: 10px;
  height: 110px;
  width: auto;
}
</style>