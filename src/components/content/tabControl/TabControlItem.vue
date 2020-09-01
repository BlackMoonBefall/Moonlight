<template>
  <div id="tab-control-item" >
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name:'TabControlItem',
}
</script>

<style scoped>
#tab-control-item{
  flex:1;
  text-align: center;
  margin: 10px 0px 0px 0px;
  padding-bottom: 10px;
  }

</style>