<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a href="">
          <img :src="item.image" alt="" @load="banLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name:'HomeSwiper',
  data(){
    return {
      one: true
    }
  },
  props:{
    banners:{
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
  components:{
    Swiper,
    SwiperItem,
  }
}
</script>

<style>

</style>