<template>
  <div id="collect-item">
    <div class="colimg"><img :src="item.show.img" alt=""></div>
    <div class="item-info">
      <div class='title'><b>{{item.title}}</b></div> 
      <div class="sp">
        <span>作者：<b>{{item.author}}</b></span> 
        <span>人气值：{{item.fav}}</span> 
      </div>
      <!-- 这个简介本来应该写在后端的数据接口的，不过，算了，20个简介有空再慢慢写吧-->
      <p class="brief">简介：一位骑士失去了要守护的人，<br>从此堕入黑暗。
        一蹶不振的他在这片大<br>陆上因为一次偶然的机遇，
        竟然发现了<br>自己所处帝国的惊天秘密，原来一切都是早已安排好的结果。
        帝国密令暗杀自己守护的三公主，作为无法保护好主人的失责骑士。
        他被流放到上古时期的荒凉大陆，变成一个奴隶过完自己剩余的一生。
        要复仇，还是要这样耻辱地活下去？————“我镇天宇，从今天开始，放弃骑士身份。”</p>
      

    </div>
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
  border-top: 1px solid rgb(190, 190, 190);
  margin: 8px 0 0 20px;
  box-shadow: -2px 2px 4px rgba(0,0,0,.5);
}
.colimg{
  width: 25%;
}
.colimg img{
  margin-left: 5px;
  box-shadow: -2px 2px 4px rgba(0,0,0,.3);
  position: relative;
  border-radius: 10px;
  height: 110px;
  width: auto;
}
.item-info{
  width: 75%;
  height: 100%;
  overflow: hidden;
}
.title{
  text-align: center;
}
.sp{
  margin: 5px 0 5px 0;
  text-indent:1.7em;
  
}
.title{
  margin: 5px 0 5px 0;
  font-size:18px
}
.sp span{
  font-size: 16px;
  margin-right: 15px;
  border-bottom: 1px solid rgb(163, 163, 163);
}
.brief{
  text-indent:2em;
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>