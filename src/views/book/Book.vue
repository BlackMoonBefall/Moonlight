<template>
  <div id="book">
    <navi-bar class="navi-bar">
      <div slot="left" class="navi-bar-left"><img src="~assets/img/back/back.png" alt="" 
        @click="backDetail">
      </div>
      <div slot="center" class="navi-bar-center">
        月光书城
      </div>
    </navi-bar>
    <scroll class="content" 
            ref="scroll">
      <book-item class="paraContent" :paraContent="paraContent"/>
    </scroll>
    <book-bot-bar/> 
  </div>
</template>

<script>
import {getBookData,getBookContent} from 'network/book'
import BookItem from './bookComps/BookItem'
import BookBotBar from './bookComps/BookBotBar'

import NaviBar from 'components/common/navibar/NaviBar' 
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'Book',
  components:{
    BookItem,
    NaviBar,
    BookBotBar,
    Scroll
  },
  data(){
    return{
      book:{},
      paraContent:''
    }
  },
  created(){
    this.getBook()
  },
  methods:{
    getBook(){
      getBookData(this.$route.params.iid).then(res =>{
        this.book = res.data
        getBookContent(this.book.content).then(res =>{
          this.paraContent = res
        })
      })
    },
    backDetail(){
      this.$router.go(-1)
    }
    
  }

}
</script>

<style scoped>
/**navibar */
.navi-bar{
  color: #fff;
  display: flex;
  background: rgb(208, 225, 250);;
}
.navi-bar-left{
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navi-bar-left img{
  padding: 2px;
  border-radius: 50%;
  border: 1px solid rgb(97, 28, 114);
  width: 50%;
} 
.navi-bar-center{
  text-align: center;
}

/**navibar */


.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}
.paraContent{
  position: relative;
  background-color: rgb(238, 238, 228);
  z-index: 20;
}
</style>