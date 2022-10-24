## vue2 
渐进式 javascript 框架 

## spa 单页面应用
基本上框架都是创建的单页面应用。整个项目只有一页。

## 安装开发环境工具
安装脚手架工具 vuecli  `npm i -g @vue/cli`

## 创建项目
- 图形化界面(vuecli 版本3+    node10+)  `vue ui` 启动图形化界面
- 命令行命令创建 `vue create 项目名`

## 运行项目
- 通过 vue ui 运行
- 通过命令行执行 `npm run serve`

## 项目介绍

- package.json  node 项目的标志性文件。里面的 scripts 字段是项目的一些脚本命令。用来启动项目 测试项目等。还有 dependencies devDependencies 项目装包的记录
- public 文件夹 里面放的是项目的 页面模板，该项目是以这个 index.html 为模版创建的。在这个 html 文件内的修改会直接修改项目
- src 文件夹 是项目源代码

## 组件
可以认为就是一个页面结构 div， app 就可以认为是 body， 那么所有的其他组件要直接或者间接的放到 app 中。
组件名必须由两个或以上单词组成，大驼峰方式(每个单词首字母都大写)比如 HelloWorld
组件由三部分组成 template结构   script js    style样式
组件嵌套怎么用
1. 创建好对应组件
2. 在父组件中导入组件
3. 在父组件中注册子组件
4. 父组件的 template 就可以使用了

template 只能有一个子级
  

## prop
当组件复用的时候，有些部分有差异， 比如个别文字， 个别图片等
那么我们可以使用 prop 来解决这个问题
可以选择让父组件传递需要的内容给子组件让其展示
例如
父组件中
```jsx
  <Children name='父组件提供的' />
```

子组件中
```js
  export default {
    props: ['name']
  }
```

```jsx
  <template>
    <span>{{name}}</span>
    <p v-bind:title="name"></p>
  </template>
```

## 模板语法
在 template 中如何使用哪个 script 的内容
- 在标签的属性上使用 js
  可以使用 v-bind 指令
  用法: v-bind:属性名="js的值" 或者简写成 :属性名="js的值
- 在双标签中间使用
  直接使用 {{js 内容}}

## 事件处理 
绑定事件写在标签上，使用 v-on 绑定事件  可以简写成 @
事件的函数需要在 script 标签导出的对象下写一个 methods 属性，该属性下的方法可以当做事件函数

事件传参  直接在 v-on 事件绑定的时候传递即可

事件的特殊些写法

事件修饰符
stop
self
once 只触发一次

```html
  <div @click.stop="xx"></div>
```

键盘事件
```html
  <input type='text' @keyup.enter='x'>
```



## style 与  class 的绑定
就是样式的绑定处理 行内 style  以及 class

## 条件渲染
消失出现
v-show 样式的消失出现
v-if   结构消失    v-else   


## 列表渲染

v-for 
注意 必须添加 key ，key 的值需要是唯一的
循环的时候可以使用 index   `(book, index) in books`

## 表单输入绑定
v-model   v-model 是 input 事件以及 value 属性的简化

## 计算属性
当页面的某个变化，是可以由当前定义好的 data 来计算出来的，那么并不需要单独在定义 data，而是定义一个计算属性
计算属性写法:
```js
  export default {
    computed: {
      total(){
        // 咔咔计算
        return 计算结果
      }
    }
  }
```
使用给的时候直接当做 data 使用即可
计算属性默认是不允许修改的，如果想要修改的话需要设置 get 和 set
计算属性写法:
```js
  export default {
    computed: {
      isAllChecked: {
        get(){
          // 咔咔计算
          return 计算结果
        },
        set(newValue){
          // 当修改计算属性 isAllChecked 时这个 set 会触发 newValue 表示的就是新的修改结果
          // 在这个 set 中要根据修改的计算属性结果，去修改计算属性的来源数据
        }
      }
    }
  }
```

## ref
vue 中 提供的一种获取原生 dom 节点的方法

```html
  <template>
    <span ref='x'>啊哈哈哈</span>
  </template>
```

```js
  export default {
    methods: {
      handleClick() {
        this.$refs.x   // 获取 span 的真实 dom 节点 就相当于 document.querySelector('span')
      }
    }
  }
```
需要注意的是当 ref 写在了循环里面，需要将 ref 的值写成不同的，并且获取的时候得到的是数组 需要加  [0]  才能获取到真实 dom 节点  `this.$refs.xx[0]`
使用 ref 的地方并不是很多， 获取输入框的内容，输入框的焦点设置

## nextTick
有些时候修改 data 之后，就希望马上获取或者使用该 data 对应的真实 dom 节点做一些操作。往往这个操作会失败。因为有可能在操作的时候更新后的真实 dom 节点，还没有再页面中渲染完毕。
nextTick 的作用是等待页面中的需要渲染的节点，渲染完毕之后，才会执行
```js
  this.$nextTick(() => {
    // 渲染完毕之后再执行的
  })
```
可以使用 setTimeout 替代

## set
当我们定义了数组或者对象形式的 data，想要修改的时候，某些方式的修改不起作用，也就是页面不会响应变化。比如 数组的下表方式修改 arr[1] = xxx,对象的属性新增和删除
此时就可以使用 vue 提供的 set 方法来修改
```js
  this.$set(数组或者对象, 属性名或者下标, 修改的值)
  // 例如 arr = [1,2,3,4]   arr[2] = 5 --->  this.$set(arr, 2, 5)     arr=[1,2,5,4]
  // 例如 obj = {a: 10}    obj.b= 20 --->  this.$set(obj, b, 20)      obj = {a: 10, b: 20}
```
当数据是对象的话，删除和添加修改无效，可以选择重新赋值， 数组也是一样


## watch 侦听器
侦听一个数据修改另一个数据（data），可以异步修改
语法: 
```js
  watch: {
    // 监听 number 的改变
    number(){
      // 一顿操作 修改某个 data
    }
  }

  watch: {
    number: {
      handler(){

      },
      immediate: true,
      deep: true
    }
  }
```

## 生命周期
- 初始渲染
  - beforeCreate
  - created
  - beforeMount
  - mounted
- 更新
  - beforeUpdate
  - updated
- 卸载
  - beforeDestroy
  - destroyed



## 插槽
- 普通插槽
- 具名插槽
- 作用域插槽


## sync 修饰符
子组件想要使用和修改父组件的 data， 可以使用 sync 简写

## 组件间的交互
- prop  父传子 什么都可以传递  一般传递属性
- 自定义事件 父传子 传函数     ------> 将父组件中修改父组件 data 的函数传递给子组件，那么子组件执行这个函数就修改了父组件的 data
  ```html
    <Cart @add='add' />
  ```

  ```js
    this.$emit('add')   //在 tempalte 中 $emit('add')
  ```
- 将需要交互的数据共享到共同的祖先组件，然后向下传递

- 插槽


## 虚拟 dom
之前的原生以及 jquery 开发，直接操作 dom ，会频繁引起浏览器的重绘， 很影响性能。
那么框架为了解决这个问题，使用的是虚拟 dom 。