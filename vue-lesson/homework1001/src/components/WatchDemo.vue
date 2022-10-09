<template>
  <div>
    <input v-model.lazy="question" type="text" />
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "",
    };
  },
  // 当现有的 data 可以计算出另一个 data ，那么计算属性就是可以不需要设置另一个data 直接用计算属性即可。但是计算过程如果需要包含异步的话，那么计算属性就不能用了。需要侦听器，监听原有的 data 来修改另一个 data。 侦听器是需要两个 data 的。
  watch: {
    // 侦听器 监听 question 的变化，里面可以带异步操作
    // question() {
    //   setTimeout(() => {
    //     if (this.question.length % 2 === 0) {
    //       this.answer = "否";
    //     } else {
    //       this.answer = "是";
    //     }
    //   });
    // },
    question: {
      // handler  是监听的数据变化的时候要触发的函数
      handler(newValue) {
        console.log(newValue);
        setTimeout(() => {
          if (this.question.length % 2 === 0) {
            this.answer = "否";
          } else {
            this.answer = "是";
          }
        });
      },
      // 这个监听进入页面就执行一次
      // immediate: true
      // 当监听的数据是对象的话，那么对象下的属性发生改变的时候也监听到，可以监听对象深层次的变化
      // deep: true
    },
  },
  // computed: {
  //   answer(){
  //     let a
  //     setTimeout(() => {
  //       if(this.question.length % 2 === 0){
  //         a = '否'
  //       }else{
  //         a = '是'
  //       }
  //     }, 500)
  //     return a
  //   }
  // },
  // methods: {

  // }
};
</script>

<style>
</style>