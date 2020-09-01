<template>
  <div>
    <collect-item v-for="(item,index) in collections" :key="item.index" :item="item" :index="index"   />
  </div>  
</template>

<script>
import CollectItem from './collectComps/CollectItem'
export default {
  name:'Collect',
  data(){
    return{
      collections:[]
    }
  },
  mounted(){
    this.collections = this.$store.state.collections

  },
  methods:{
    
  },
  components:{
    CollectItem,
  }
}
</script>

<style scoped>

</style>