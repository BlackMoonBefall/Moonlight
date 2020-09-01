import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    collections:[]
  },
  getters:{

  },
  mutations:{
    addToColl(state,iid){
      //添加到数组
      this.state.collections.push(iid)
    
    },
    getColl(){
      return this.state.collections
    }

  },
  actions:{

  },
  modules:{

  }
})

export default store