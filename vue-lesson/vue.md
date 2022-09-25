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


## style 与  class 的绑定
就是样式的绑定处理 行内 style  以及 class



## 虚拟 dom
之前的原生以及 jquery 开发，直接操作 dom ，会频繁引起浏览器的重绘， 很影响性能。
那么框架为了解决这个问题，使用的是虚拟 dom 。