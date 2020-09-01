<template>
  <div id="back-top">
    <div class="bac" ><span>↑</span></div>
  </div>
</template>

<script>
export default {
  name:'BackTop',
  methods:{
   
  }
}
</script>

<style scoped>
.bac{
  color: rgb(238, 25, 25);
  width: 42px;
  height: 42px;;
  background: #eee;
  border-radius: 50%;
  /*flex 布局*/
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
  font-size: 20px;
}
#back-top{
  position:fixed;
  bottom: 65px;
  right: 20px;
}

</style>