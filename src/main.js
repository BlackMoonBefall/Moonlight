import Vue from 'vue'
import App from './App.vue'
import router from './router'
import toast from 'components/common/toast'
import comment from 'components/common/comment'
import store from './store'

Vue.use(toast)
Vue.use(comment)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()  //创建$bus总线
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


