import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


const a = {
  aaa(){
    setTimeout(function(){
      console.log(this);
    })
  },

  bbb(){
    setTimeout(() => {
      console.log(this);
    })
  }
}