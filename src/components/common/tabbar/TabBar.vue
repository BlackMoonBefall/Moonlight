<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
}
</script>

<style>
 #tab-bar {
    display: flex;
    background-color: rgb(240, 223, 228);
    position: fixed;  /*固定在底部*/ 
    left: 0;
    right: 0;
    bottom: 0;     /*固定在底部*/ 

    box-shadow: 0px -3px 3px rgba(68,60,78, .3);
  }
 
</style>