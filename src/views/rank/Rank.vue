<template>
  <div id="rank">
   <navi-bar class="rank-nav"><div slot="center">排行榜</div></navi-bar>
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
    this.toShowRank() //显示排序数据

  },
  methods:{
    toShowRank(){
        let tempArr = [] //弄一个空数组
        let tempIn = 0
        let tempFav = 0
        let temp = {}
        //进行请求，并且按热度排序好
      getRankData(1).then(res =>{
        tempArr.push(...res.data.goods['rec'].list)
        tempArr.push(...res.data.goods['hot'].list)
        for(let i=0; i < tempArr.length; i++){
          for(let j=0; j < tempArr.length-i; j++){
            if(tempFav < tempArr[j].fav){
              tempFav = tempArr[j].fav
              tempIn = j
            }
          }  //找出来最大的值的位置：tempIn
          temp = tempArr[tempIn]  //取出对应的对象
          tempArr.splice(tempIn,1)  //删掉在原来的位置
          tempArr.push(temp)     //添加回头部
          //在进行下一次之前，清零
          tempFav = 0
        }
        //进行了若干次之后，数组已经有序                     
        this.ranks = tempArr
      })
    }
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