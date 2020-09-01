<template>
  <div class="tab-control">
    <tab-control-item v-for="(item,index) in titles"
     :key="item.index" 
     :class="{active: index === currentIndex}" @click.native="itemselect(index)">
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
  methods:{
    itemselect(index){
      this.currentIndex = index;
      this.$emit('getCurrentType',index)
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
    background: rgb(247, 243, 243);
  }
  
  .active{
  color: rgb(60, 196, 230);
  border-bottom: 2px solid rgb(60, 196, 230);
  }
</style>
