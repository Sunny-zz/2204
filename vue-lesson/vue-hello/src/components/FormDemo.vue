<template>
  <div>
    <h3>表单</h3>
    <!--  <input type="text" :value="txt" @input="handleInput"> -->
    <!--  v-model 简化了 value 以及 @input -->
    <!-- v-model 指令的修饰符     -->
    <!-- .trim  去掉左右空白 -->
    <!-- .lazy  懒加载， 输入的时候不会改变 data 失去焦点才会改变 -->
    <!-- .number 只能输入数字 -->
    <input type="text" v-model.number="txt" >
    <textarea v-model="comment"></textarea>
    <input type="checkbox" v-model="checked" >
    <div>
      <h3>喜欢的水果有哪些</h3>
      <label for="apple">苹果</label><input type="checkbox" value="apple" name="" v-model="fruits" id="apple">
      <label for="banana">香蕉</label><input type="checkbox" value="banana" name="" v-model="fruits" id="banana">
    </div>
    <div>
      <h3>你的学历是</h3>
      <label for="zhuan">专科</label><input id="zhuan" v-model="xueli" type="radio" value="zhuan" name="xueli" >
      <label for="ben">本科</label><input id="ben" v-model="xueli" type="radio" value="ben" name="xueli" >
    </div>

    <select v-model="selectTxt" name="" id="">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
    <button @click="showRes">res</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      txt: 123,
      comment: '我是默认评论',
      checked: true,
      fruits: [],
      xueli: 'ben',
      selectTxt: '4'
    }
  },
  methods: {
    // handleInput(event){
    //   this.txt = event.target.value
    //   console.log(this.txt)
    // }
    showRes(){
      // if(this.txt){
      //   console.log(this.txt)
      // }

      console.log(this.comment)
    }
  }
}
</script>

<style>

</style>