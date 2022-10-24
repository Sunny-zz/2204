<template>
  <div style="margin-left: 200px;">
    <input type="text" v-focus:a.xxx.zzz='true' >
  </div>
</template>

<script>
export default {
  // 局部的自定义指令
  // 自定义指令的钩子函数，常用的是 bind 和  inserted 后者是元素渲染到了页面，可以获取真实 dom 做操作。
  directives: {
    focus: {
      // 钩子函数 inserted 自动触发 
      // 钩子函数接收四个参数   el:dom节点   bingding:修饰符，参数以及传递的值的信息   vnode  oldVnode
      inserted(el, {value,arg,modifiers}){
        console.log(arg)
        console.log(modifiers)
        if(value || value === undefined){
          el.focus()
        }
      }
    }
  }
}
</script>

<style>

</style>