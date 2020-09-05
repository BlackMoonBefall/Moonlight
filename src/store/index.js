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
      if(state.collections.length == 0){
        this.state.collections.push(book.data)
        return
      }
      //第一次不用判断直接添加收藏
      let flag = true
      for(let i=0; i<state.collections.length; i++){
          //判断是否有重复
        if(book.data.iid == state.collections[i].iid){
          //重复收藏！
          flag = false
        } 
      }
      if(flag)
        this.state.collections.push(book.data)
    },
    delInColl(state,iid){
      for(let i=0; i<state.collections.length; i++){
        //删除iid项收藏
        if(state.collections[i].iid == iid){
          state.collections.splice(i,1)
        }
      }
    }
  },
  actions:{

  },
  modules:{

  }
})

export default store