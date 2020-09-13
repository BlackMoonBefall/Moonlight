<template>
  <div id="detail-author">
    <div class="detail">
      <div class="author">作者：{{item.author}}</div>
      <div class="chapter" v-if="item.chapter">
        <div class="title">章节目录：</div>
        <div v-for="(itemCa,index) in item.chapter" :key="index">第{{index+1}}章：{{itemCa}}</div>
        <button class="btn" @click="readBook">开始阅读</button>
      </div>
      <button  v-else class="btn">暂无资源</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailAuthor',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods:{
    readBook(){
      this.$router.push('/book/' + this.item.iid)
    }
  }
}
</script>

<style scoped>
#detail-author{
  position: relative;
  border-top: 2px solid rgb(199, 199, 199);
  margin-top: 5px;
  display: flex;
  background: rgb(236, 213, 232);
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
}
.detail{
  display: flex;
  width: 100%;
  height: 100%;
}
.author{
  text-align: center;
  width: 40%;
}
.chapter{
  width: 60%;
}
.chapter .title{
  text-align: center;
  margin: 3px 0 3px 0;
}
.btn{
  height: 35px;
  width: 120px;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid white;
  background-color: rgb(255, 200, 200);
  color: white;
  border-radius: 8px;
}
</style>