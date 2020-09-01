<template>
  <div id="collect-item">
    第{{index+1}}本书,书的编号：{{item}}
  </div>  
</template>

<script>
export default {
  name:'CollectItem',
  props:{
    item:{
      type:String,
      default(){
        return ''
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
  background-color: rgb(180, 216, 233);
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  border-top: 2px solid gray;
  margin: 4px 0 0 20px;
}
</style>