<!-- <template> -->
  <!-- 希望展示标题 -->
  <!-- <h1 v-if="level === 1">
    <slot />
  </h1> -->
  <!-- <h2 v-else-if="level === 2">
    <slot />
  </h2> -->
  <!-- <h3 v-else-if="level === 3">
    <slot />
  </h3> -->
<!-- // </template> -->

<script>
export default {
  props: ['level'],
  data() {
    return {
      count: 100
    }
  },
  // vue 组件中可以使用渲染函数替代 组件的 template

  // 渲染函数内
  // 1. jsx 语法  也就是 html 可以在 js 中书写
  // html 中遇到 js 的话加括号 标签中的js不需要加

  // 2. createElement 语法  这个语法会创建一个 vue 的节点  渲染函数 render 内接收 createElement 作为参数，一般简写成 h

  // createElement 语法的使用   h(a,b,c)
  // a 标签名
  // b 是对象 书写的是该标签的样式啊 事件 等内容 可以省略
  // c 是字符串或者数组 书写的是的 标签中间的内容
  render(h){
    const tag = 'h' + this.level
    // vue 组件中 js 内获取插槽
    // this.$slots.xxx   xxx 表示的是 插槽名
    // return  <tag style={{width: '200px'}}>{this.$slots.default} <span>{this.count}</span> <button onClick={this.add} >按钮</button> </tag>
    return h(tag,{
      class:{
        foo: true
      },
      style:{
        color: 'red'
      },
      attrs: {
        title: 'xxxx'
      },
      on:{
        click: this.add
      }
    }, [
      this.$slots.default,
      h('button', '添加')
    ])
  },
  methods: {
    add() {
      // this.count ++ 
      console.log(11)
    }
  },
}
</script>

<style>

</style>