<template>
  <div id="comment">
    <textarea class="bord" v-if="tshow" id="" cols="10" rows="5" placeholder="写一条评论吧~"></textarea>
  </div>  
</template>

<script>
export default {
  name:'Comment',
  data(){
    return{
      tshow: false
    }
  },
  methods:{
    show(msg,duration=3000){
      this.tshow = true
      setTimeout(()=>{
        this.tshow = false
      },duration)

    },
  }

}
</script>

<style scoped>
#comment{
  position: fixed;
  top: 40%;
  right: 60%;
  z-index: 99;
}
.bord{
  width: 300%;
  height: 400%;
  border: 3px solid rgb(151, 163, 218);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>