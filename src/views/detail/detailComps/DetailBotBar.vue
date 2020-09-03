<template>
  <div id="detail-bot-bar">
    <div class="btimg">
      <img src="~assets/img/detailbottom/collect.png" alt="">
      <img class="imgbor" @click="comment" src="~assets/img/detailbottom/comment.png" alt="">
      <img class="imgbor" @click="report" src="~assets/img/detailbottom/report.png" alt="">
    </div>
    <div class="btdiv">
      <div id="rec" @click="addSup">推荐本书</div>
      <div id="sub" @click="addCollect">加收藏</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBotBar',
  props:{
    passtoColl:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    addSup(){
      this.$toast.show('推荐成功',2000)
    },
    addCollect(){
      //调用Vuex加入收藏
      let book = this.passtoColl
      let tempArr = this.$store.state.collections.length
      this.$store.commit('addToColl',book)

      if(this.$store.state.collections.length == tempArr) 
        this.$toast.show('收藏夹里已经有啦~',2000)
      else 
        this.$toast.show('成功添加到收藏夹',2000)
    },
    report(){
      this.$toast.show('举报成功',2000)
    },
    comment(){
      this.$comment.show()
    }
  }
}
</script>

<style scoped>
#detail-bot-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  box-shadow: 0px -3px 3px rgba(68,60,78, .3);
}
.btimg{
  width: 40%;
}
.btimg img{
  width: 33%;
  height: 100%;
}
.imgbor{
  border-left: 2px solid rgb(212, 212, 212);
}
#sub{
  background-color: rgb(238, 229, 110);
}
#rec{
  background-color: rgb(255, 87, 87);
}
.btdiv{
   width: 60%;
   display: flex;
}
.btdiv div{
  flex:1;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
}

</style>