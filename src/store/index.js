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
    addToColl(state,book){
      //添加到数组
      this.state.collections.push(book.data)
      //收藏里添加之后。book的相关数据就会被传到vuex，接下来在收藏里进行展示
    
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