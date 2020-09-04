<template>
  <div id="user-icon">
    <div class="icon">
      <img src="~assets/img/defuser/profile.jpg" alt="">
      <div>未登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Usericon'
}
</script>

<style scoped>

.icon{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon img{
  margin-top:60px;
  width: 100px;
}
.icon div{
  margin: 5px 0 5px 0;
}
</style>