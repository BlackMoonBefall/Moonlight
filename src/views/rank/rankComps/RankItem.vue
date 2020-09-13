<template>
<div id='rank-item-bg'>
  <div class="hot">
    <div class="rimg" v-if="index === 0"><img src="~assets/img/hot/hot01.png" alt=""></div>
    <div class="rimg" v-else-if="index === 1"><img src="~assets/img/hot/hot02.png" alt=""></div>
    <div class="rimg" v-else-if="index === 2"><img src="~assets/img/hot/hot03.png" alt=""></div>
    <div class="ranknum" :class="{ranknumb:index > 2}" >No.{{index+1}}<br><b>{{item.fav}}</b></div>
  </div>
  <div class="rank-item" @click="goToDetail">
    <div class="rankimg"><img :src="item.show.img" alt=""></div>
    <div class="item-info">
      <div class='title'>
        <b>{{item.title}}</b>
      </div> 
      <div class="sp">
        <span><b>{{item.author}}</b></span> 
        <!-- <span>人气值：{{item.fav}}</span>  -->
      </div>
      <!-- 这个简介本来应该写在后端的数据接口的，不过，算了，20个简介有空再慢慢写吧-->
      <p class="brief2" v-if="item.brief">{{item.brief}}</p>
      <p class="brief" v-else>简介：一位骑士失去了要守护的人，<br>从此堕入黑暗。
        一蹶不振的他在这片大<br>陆上因为一次偶然的机遇，
        竟然发现了自己所处帝国的惊天秘密，原来一切都是早已安排好的结果。
        帝国密令暗杀自己守护的三公主，作为无法保护好主人的失责骑士。
        他被流放到上古时期的荒凉大陆，变成一个奴隶过完自己剩余的一生。
        要复仇，还是要这样耻辱地活下去？————“我镇天宇，从今天开始，放弃骑士身份。”</p>
      
    </div>
    
  </div>
</div>

</template>

<script>
export default {
  name:'RankItem',
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
    }
  },
  data(){
    return{
      cname:'',
      cnum: 0
    }
  },
  mounted(){
    this.sortrank()
  },
  methods:{
    sortrank(){
      //改变前三个颜色
      document.getElementsByClassName('rank-item')[0].style.backgroundColor = 'rgb(247, 190, 190)'
      document.getElementsByClassName('rank-item')[1].style.backgroundColor = '#f8f9bc'          
      document.getElementsByClassName('rank-item')[2].style.backgroundColor = 'rgb(212, 212, 212)'          
    },
    goToDetail(){
      this.$router.push('/detail/' + this.item.iid)  //从收藏点击进入详情页
    }
  }
}
</script>

<style scoped>
#rank-item-bg{
  display: inline-flex;
  width: 100%;
}
.rank-item{
  border-radius: 10px 0 0 10px;
  font-size: 17px;
  background-color: rgb(255, 255, 255);
  height: 18vh;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  border-top: 1px solid rgb(190, 190, 190);
  margin: 8px 0 0 8px;
  box-shadow: -2px 2px 4px rgba(0,0,0,.5);
}
.rankimg{
  width: 25%;
}
.rankimg img{
  margin-left: 5px;
  box-shadow: -2px 2px 4px rgba(0,0,0,.3);
  position: relative;
  border-radius: 10px;
  height: 110px;
  width: auto;
  background-color: rgb(241, 173, 173);
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
  text-align: center;
  margin: 5px 0 5px 0; 
}
.title{
  position: relative; 
  margin: 5px 0 5px 0;
  font-size:18px;
}
.sp span{
  font-size: 14px;
  margin-right: 15px;
  border-bottom: 1px solid rgb(163, 163, 163);

}
/*简介*/
.brief{
  margin-left: 5px;
  text-indent:2em;
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brief2{
  text-indent:2em;
  font-size: 14px;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
}
/*左边热度和图标*/
.hot{
  display: inline-flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  width: 15%;
  font-size: 16px;
  position: relative;
}
.ranknum{
  position:absolute;
  bottom:10px;
  left: 8px; 
}
.ranknumb{
  position:absolute;
  top:50px;
  left: 11px;
}
.rimg img{
  width: 100%;
}

</style>