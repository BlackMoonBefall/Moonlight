<template>
  <div class="detail-shower">
    <img :src="detbanner" alt="" @load="banLoad">
  </div>
</template>

<script>
export default {
  name:'DetialSwiper',
  data(){
    return {
      one: true
      
    }
  },
  components:{
 
  },
  props:{
    detbanner:{
      type: String,
      default(){
        return ''
      }
    }
  },
  methods:{
    banLoad(){
      if(this.one) {
        this.$emit('banLoad')
        this.one = false
      }
    }
  },
}
</script>

<style scoped>
.detail-shower{
  background-color: rgb(234, 241, 241);
}
.detail-shower img{
  margin: 10px 0 0 10px;
  border-radius: 5px;
  width: auto;
  height: 200px;
}
</style>