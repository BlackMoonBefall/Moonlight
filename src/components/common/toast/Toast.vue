<template>
  <div id="toast">
    <div class="bord" v-show="tshow">
      {{msg}}
    </div>
  </div>  
</template>

<script>
export default {
  name:'Toast',
  data(){
    return{
      msg:'',
      tshow: false
    }
  },
  methods:{
    show(msg,duration){
      this.tshow = true
      this.msg = msg
      setTimeout(()=>{
        this.tshow = false
        this.msg = ''
      },duration)

      
    },
  }

}
</script>

<style scoped>
#toast{
  position: fixed;
  top: 50%;
  right: 50%;
  /* transform: translateX(50%);
  transform: translateY(50%); */
  z-index: 99;
}
.bord{
  width: 200%;
  height: 30px;
  border-radius: 5px;
  color: white;
  background: rgba(0,0,0,.8);
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>