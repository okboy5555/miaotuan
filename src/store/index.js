import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      cart,
      products
    },
    state: {
      count: 0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    getters: {
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      },
      doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
      }
    },
    mutations: {
      increment (state, playload) {
        state.count += playload.amount
      },
      getData () {

      },
      getOtherData () {

      }
    },
    actions: {
      // checkout ({ commit, state }, products) {
      //   // 把当前购物车的物品备份起来
      //   const savedCartItems = [...state.cart.added]
      //   // 发出结账请求，然后乐观地清空购物车
      //   commit('request')
      //   // 购物 API 接受一个成功回调和一个失败回调
      //   shop.buyProducts(
      //     products,
      //     // 成功操作
      //     () => commit('success'),
      //     // 失败操作
      //     () => commit('fail', savedCartItems)
      //   )
      // }
      incrementAsync ({ commit }, amount) {
        setTimeout(() => {
          commit('increment', amount)
        }, 1000)
      }
      // async actionA ({ commit }) {
      //   commit('gotData', await getData())
      // },
      // async actionB ({ dispatch, commit }) {
      //   await dispatch('actionA') // 等待 actionA 完成
      //   commit('gotOtherData', await getOtherData())
      // }
    }
  })
}
