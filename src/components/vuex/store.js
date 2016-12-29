import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  list:[
    {
      name:'Tamsen'
    }
  ],
  count:0
}

const mutations={
  GETLIST(state,amount){
    state.list=amount
  },
  INCREASE(state,amount){
    state.count=state.count+amount
  },
  REDUCE(state,amount){
    state.count=state.count-amount
  }
}

export default new Vuex.Store({
  state,mutations
})
