<template>
  <div id="user">
    <navi-bar class="collect-nav"><div slot="center">我</div></navi-bar>
    <user-icon class="user-icon" />
    <user-info class="user-info" />
  </div>  
</template>

<script>
import NaviBar from 'components/common/navibar/NaviBar'

import UserIcon from './userComps/UserIcon'
import UserInfo from './userComps/UserInfo'
export default {
  name:'User',
  components:{
    UserIcon,
    UserInfo,
    NaviBar,
  }
}
</script>

<style scoped>
#user{
  background-color: rgb(246,246,246);
  height: 100vh;
}
.collect-nav{
  background-color: rgb(238, 206, 202);
  color: #fff;
}
</style>