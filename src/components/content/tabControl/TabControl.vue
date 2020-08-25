<template>
  <div class="tab-control">
    <tab-control-item v-for="(gititem,index) in titles"
     :key="item.index"
     :class="{active: index === currentIndex}>
      {{item}}
      </tab-control-item>
  </div>  
</template>

<script>
import TabControlItem from './TabControlItem'
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0,
    }
  },
  components:{
    TabControlItem
  }
}

</script>

<style scoped>
  .tab-control{
    display: flex;
  }
  

</style>
