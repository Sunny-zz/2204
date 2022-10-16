<template>
  <div class="product-demo">
    <!-- vue 组件中向下传递函数可以使用 自定义事件传递也可以使用 prop(prop 不常见)  -->
    <!-- 传递自定义事件 @事件名='事件' -->
    <TopSearch
      :isSeacrhStock="isSeacrhStock"
      :searchText="searchText"
      @changeSearchText="changeSearchText"
      @changeIsSeacrhStock="changeIsSeacrhStock"
    />
    <ListContent :products="showProducts" />
  </div>
</template>

<script>
import ListContent from "./ListContent.vue";
import TopSearch from "./TopSearch.vue";
import axios from "axios";
export default {
  components: { ListContent, TopSearch },
  data() {
    return {
      products: [],
      isSeacrhStock: "",
      searchText: "",
    };
  },
  computed: {
    showProducts() {
      const { searchText, isSeacrhStock, products } = this;
      return products
        .filter((ele) => ele.name.includes(searchText))
        .filter((ele) => (isSeacrhStock ? ele.stocked : true));
    },
  },
  async created() {
    const res = await axios.get("http://localhost:3008/products");
    console.log(res.data);
    this.products = res.data;
  },
  methods: {
    changeSearchText(newText) {
      this.searchText = newText;
    },
    changeIsSeacrhStock(newStatus) {
      this.isSeacrhStock = newStatus;
    },
  },
};
</script>

<style>
.product-demo {
  width: 240px;
  margin: 0 auto;
}
</style>