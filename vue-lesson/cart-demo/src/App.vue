<template>
  <div>
    <h2>shopping cart</h2>
    <ProductList :products='products' @addToCart='addToCart' />
    <CartList :cartList='cartList' :total='total' />
  </div>
</template>

<script>
import CartList from './components/CartList.vue'
import ProductList from './components/ProductList.vue'
import axios from 'axios'
export default {
  components: { ProductList, CartList },
  data(){
    return {
      products: [],
      cartList: []
    }
  },
  computed: {
    total() {
      return this.cartList.reduce( (res, ele) => res + ele.price * ele.count, 0).toFixed(2)
    }
  },
  async created () {
    const res = await axios.get('http://localhost:3008/products')
    this.products = res.data
  },
  methods: {
    addToCart(product) {
      this.products.find(ele => product.id === ele.id).inventory -- 
      // 判断商品是否买过了
      const currentProduct = this.cartList.find(ele => ele.id === product.id) 
      
      currentProduct ? currentProduct.count ++  : this.cartList.push({...product, count: 1})
    } 
  },
}
</script>

<style>

</style>