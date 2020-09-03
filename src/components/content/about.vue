<template>
  <div id="float_about" v-show="isShow" @click="hide()"><router-link to="/aboutme">关于本站</router-link></div>  
</template>

<script>
export default {
  name:'about',
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    hide(){
      this.isShow = false
    }
  }
}
// console.log(this.$route.path);  


</script>

<style>
/***********关于本站***************/
#float_about > a{
    float: left;
    position: fixed;
    top: 180px;
    left: 12px;
    border-radius:3px ;
    border: 2px solid rgb(24, 42, 102);
    width: 25px;
    text-align: center;
    background-color: rgb(123, 211, 218);
    color: rgb(248, 248, 248);
    padding: 3px;

}
</style>