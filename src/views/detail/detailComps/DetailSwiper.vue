<template>
  <swiper class="detail-swiper">
      <swiper-item v-for="item in detbanners" :key="item.index">
          <img :src="item.dimg" alt="" @load="banLoad">
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name:'DetialSwiper',
  data(){
    return {
      one: true
      
    }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    detbanners:{
      type: Array,
      default(){
        return []
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
.detail-swiper{
  width: 100%;
  height: 270px;
}
</style>