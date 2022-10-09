<template>
  <div class="cart">
    <div class="cart-top">
      <input v-model="isAllChecked" type="checkbox" />
      <span>商品</span>
      <span>单价</span>
      <span>数量</span>
      <span>小计</span>
      <span>操作</span>
    </div>
    <div class="cart-item" v-for="item in goods" :key="item.id">
      <input v-model="item.isCheck" type="checkbox" />
      <img :src="item.goodsImg" alt="" />
      <span>{{ item.goodsTitle }}</span>
      <span>{{ item.goodsPrice }}</span>
      <div>
        <button :disabled="item.goodsCount === 1" @click="sub(item)">-</button>
        <span>{{ item.goodsCount }}</span>
        <button @click="add(item)">+</button>
      </div>
      <span>{{ item.goodsCount * item.goodsPrice | formatNum(30) }}</span>
      <button @click="del(item.id)">删除</button>
    </div>
    <div class="cart-bottom">
      <input v-model="isAllChecked" type="checkbox">
      <button @click="delCheckedGoods">删除选中的商品</button>
      <span>已选 {{totalNum}} 件</span>
      <span>总价: {{total | formatNum(20)}} </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          id: 1,
          goodsImg:
            "https://img20.360buyimg.com/n0/s80x80_jfs/t1/170890/31/30359/59644/632c00c8E9007aa31/68f8626132c7528b.jpg.dpg",
          goodsTitle: "小米手机",
          goodsPrice: 10,
          goodsCount: 1,
          isCheck: false,
        },
        {
          id: 2,
          goodsImg:
            "https://img13.360buyimg.com/n0/s80x80_jfs/t1/167373/19/20751/124840/6333e78fEa04c009c/93d248e3a30f4f21.jpg.dpg",
          goodsTitle: "华为手机",
          goodsPrice: 20,
          goodsCount: 5,
          isCheck: true,
        },
        {
          id: 3,
          goodsImg:
            "https://img30.360buyimg.com/n0/s80x80_jfs/t1/25939/7/18290/144242/631f3191E42966c1d/448938c4578dbcca.jpg.dpg",
          goodsTitle: "vivo手机",
          goodsPrice: 30,
          goodsCount: 6,
          isCheck: false,
        },
        {
          id: 4,
          goodsImg:
            "https://img20.360buyimg.com/n0/s80x80_jfs/t1/98075/31/32789/73025/6324a6d5E0badc088/7017967a2087ea19.jpg.dpg",
          goodsTitle: "苹果手机",
          goodsPrice: 40,
          goodsCount: 1,
          isCheck: false,
        },
      ],
      // 已选商品总数以及总价并不需要单独设置 data，因为可以通过 goods 这个数组一些列的运算得到
      // 可以将运算写到 methods 的函数内，然后返回，在 template 中使用
      // vue 中提供了 计算属性的 知识点，就是用来 对原有的 data 进行运算，得到想要的结果

    };
  },
  // 过滤器
  // 局部过滤器(组件内的)  
  // 用法是 在 template 中  {{ 参数 | 过滤器}}
  // filters: {
  //   formatNum(number){
  //     return number.toFixed(2)
  //   }
  // },
  // 全局过滤器 需要写在 main.js 中，或者写到对应文件中引入到 main.js
  // 计算属性  就相当于一个特殊的 data
  // 写法是一个函数需要返回一值，这个值就是计算属性的结果
  computed: {
    total(){
      // let num = 0
      // this.goods.forEach(item => {
      //   if(item.isCheck){
      //     num = item.goodsCount * item.goodsPrice + num
      //   }
      // });
      // return num
      return this.goods.reduce((res, item) => {
        return item.isCheck ? res + item.goodsPrice * item.goodsCount : res
      }, 0)
    },
    totalNum(){
      return this.goods.reduce((res, item) => {
        return item.isCheck ? res + item.goodsCount : res
      }, 0)
    },
    // 当将全选的状态做成了计算属性的话，点击全选就会报错，提示计算属性不可以修改 如果需要请设置 计算属性的 setter
    // isAllChecked(){
    //   return this.goods.every(ele => ele.isCheck)
    // }

    isAllChecked: {
      // get 是计算属性的值
      // set 是计算属性修改要执行的, 里面需要根据新的值 修改计算属性来源
      get(){
        return this.goods.every(ele => ele.isCheck)
      },
      set(newValue){
        // 当计算属性被修改时  会执行的  newValue 是修改之后的值
        // console.log(newValue)
        // 要根据修改的结果去修改对应的 data
        this.goods.forEach(ele => {
          ele.isCheck = newValue
        });
      }
    }
    
  },
  methods: {
    add(item) {
      // 哪一个商品的数量需要 + 1
      item.goodsCount++;
    },
    sub(item) {
      if (item.goodsCount > 1) {
        item.goodsCount--;
      }
    },
    del(id) {
      this.goods = this.goods.filter((ele) => ele.id !== id);
    },
    delCheckedGoods(){
      this.goods = this.goods.filter(ele => !ele.isCheck)
    },
    // allTotal(){
    //   // this.goods
    //   let num = 0
    //   this.goods.forEach(item => {
    //     if(item.isCheck){
    //       num = item.goodsCount * item.goodsPrice + num
    //     }
    //   });
    //   return num
    // }
    allCheck(){
      
    }
  },
};
</script>

<style>
.cart {
  width: 800px;
  margin: 0 auto;
}
.cart-item {
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  align-items: center;
}
.cart-top{
  display: flex;
  justify-content: space-between;
}
</style>