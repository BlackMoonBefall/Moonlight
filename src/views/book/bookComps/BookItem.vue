<template>
  <div id="book-item">
    <p v-html="paraContent" class="paraContent"></p>
  </div>
</template>

<script>
export default {
  name:'BookItem',
  props:{
    paraContent:{
      type:String,
      default(){
        return ''
      }
    }
  },

}
</script>

<style scoped>
.paraContent{
  text-align:left;
  text-justify: newspaper;
  word-break: break-all;
  text-indent:2em;
  line-height:30px; 
  font-size: 18px;
} 
</style>