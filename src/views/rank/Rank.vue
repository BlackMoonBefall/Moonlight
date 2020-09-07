<template>
  <div id="rank">
   <navi-bar class="rank-nav"><div slot="center">排行榜(α)</div></navi-bar>
   <scroll class="content">
    <rank-item v-for="(item,index) in ranks" :key="item.index" :item="item" :index="index" />
   </scroll>
  </div>  
</template>

<script>
import {getRankData} from 'network/rank.js'
//--------------------------------
import Scroll from 'components/common/scroll/Scroll'
import NaviBar from 'components/common/navibar/NaviBar'
//--------------------------------
import RankItem from './rankComps/RankItem'
//--------------------------------

export default {
  name:'Rank',
  components:{
    NaviBar,
    RankItem,
    Scroll
  },
  data(){
    return{
      ranks:[]
    }
  },
  created(){
      let tempArr = [] //弄一个空数组
      let tempIn = 0
      let tempFav = 0
      //进行请求，并且按热度排序好
    getRankData(1).then(res =>{
      tempArr.push(...res.data.goods['rec'].list)
      tempArr.push(...res.data.goods['hot'].list)
      tempFav = tempArr[0].fav
      for(let i=0; i < tempArr.length; i++){
        for(let j=i; j < tempArr.length; j++){
          if(tempFav <= tempArr[i].fav){
            tempFav = tempArr[i].fav
            tempIn = i
          }
        }  //找出来最大的值的位置：tempIn
        let temp = tempArr[tempIn]  //取出对应的对象
        tempArr.splice(tempIn,1,)  //删掉在原来的位置
        tempArr.unshift(temp)     //添加回头部
      }
      //进行了若干次之后，数组已经有序                     //！！！！！！排序不对，有bug！！！！！！！！
      this.ranks = tempArr
    })
  }
}
</script>
<style scoped>
.rank-nav{
  background-color: rgb(202, 207, 238);
  color: #fff;
}
.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}
</style>