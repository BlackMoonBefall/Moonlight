<template>
  <div id="feature">
    <div @click="toalert"><img src="~assets/img/feature/feature.jpg" alt=""></div>
  </div>  
</template>

<script>
export default {
  name:'FeatureView',
  methods:{
    toalert(){
      alert('抱歉，活动已结束~')
    }
  }

}
</script>

<style>
  #feature img{
    width: 100%;
  }
</style>