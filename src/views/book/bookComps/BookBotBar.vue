<template>
  <div id="book-bot-bar">
    <div class="last" @click="last">上一章</div>
    <div class="back" @click="back">回到目录</div>
    <div class="next" @click="next">下一章</div>
  </div>
</template>

<script>
export default {
  name:'BookBotBar',
  methods:{
    next(){
      this.$toast.show('请先登录~',1000)
    },
    last(){
      this.$toast.show('请先登录~',1000)
    },
    back(){
      this.$toast.show('请先登录~',1000)
    }
  }
}
</script>

<style scoped>
#book-bot-bar{
  background-color: rgb(223, 233, 238);
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  line-height: 44px;
  box-shadow: 0px -3px 3px rgba(68,60,78, .2);
  text-align: center;
}
.last, .next{
  width: 120px;
}
.back{ 
    flex:1 ;
  }
</style>