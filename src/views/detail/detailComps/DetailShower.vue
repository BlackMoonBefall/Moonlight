<template>
  <div class="detail-shower">
    <div class="detimg"><img :src="detbanner" alt="" ></div>
    <div class="detbrief"><!-- 这个简介本来应该写在后端的数据接口的，不过，算了，20个简介有空再慢慢写吧-->
      <p class="brief">简介：一位骑士失去了要守护的人，从此堕入黑暗。
        一蹶不振的他在这片大陆上因为一次偶然的机遇，
        竟然发现了自己所处帝国的惊天秘密，原来一切都是早已安排好的结果。
        帝国密令暗杀自己守护的三公主，作为无法保护好主人的失责骑士。
        他被流放到上古时期的荒凉大陆，变成一个奴隶过完自己剩余的一生。
        要复仇，还是要这样耻辱地活下去？————“我镇天宇，从今天开始，放弃骑士身份。”
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetialSwiper',
  data(){
    return {
    
      
    }
  },
  components:{
 
  },
  props:{
    detbanner:{
      type: String,
      default(){
        return ''
      }
    }
  },
  methods:{
   
  },
}
</script>

<style scoped>
.detail-shower{
  display: flex;
  background-color: rgb(234, 241, 241);
}
.detail-shower img{
  width: 30%;
  margin: 10px 0 0 10px;
  border-radius: 5px;
  width: auto;
  height: 200px;
}
.detbrief{
  width: 70%;
}
.brief{
  margin: 10px 10px 10px 10px;
  text-indent: 2em;
  font-size: 14px;
}


</style>