import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    cart: {
      productInCartIds: [1,2],
      productNumsById: {1:2,2:1}
    }
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    }
  },
  actions: {
    async getProducts({commit}){
      const res = await axios.get('http://localhost:3008/products')
      // console.log(res.data)
      commit('getProducts', res.data)
    }
  },
  getters: {
    cartList(state){
      return state.cart.productInCartIds.reduce((res, id)=> {
        const currentProduct = state.products.find(product => {
          return product.id === id
        })
        res.push({...currentProduct, num: state.cart.productNumsById[id]})
        return res
      }, [])
    }
  }
})

export default store 