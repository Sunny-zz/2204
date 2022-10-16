<template>
  <div class="list-content">
    <div>
      <span>Name</span>
      <span>Price</span>
    </div>
    <!-- 商品列表组件 我们需要两个 -->
    <!-- 就需要提供两个类别  而且还有不同类别的数据 -->
    <ProductList v-for="category in categories" :key="category" :title='category' :products="products.filter(ele => ele.category === category)"  />
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
export default {
  components: { ProductList },
  props: ['products'],
  computed: {
    // 产品的类别数组
    // [
    //   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    //   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    //   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    //   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    //   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    //   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    // ],

    // ["Sporting Goods","Electronics"]
    categories(){
      const categories = []
      this.products.forEach(ele => {
        if(!categories.includes(ele.category)){
          categories.push(ele.category)
        }
      });
      return categories
    }
  }
}
</script>

<style>
</style>