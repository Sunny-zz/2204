### node 
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
在任何地方只要安装了 node 那么就可以运行 js。js 就可以做 全栈了。

Node.js 的包管理器 npm，是全球最大的开源库生态系统。
npm 其实也管理了前端所需要的包。npm 可以下载前端的包，还可以帮助我们管理我们的包。

### npm 
包管理工具
使用 npm 管理我们项目的包(依赖 插件)

### 如何让 npm 管理你的项目依赖
- 将你的项目制作成 npm 项目 执行`npm init -y`
- 使用 npm 下载相关依赖


### 如何下载包
- 项目内下载
  npm install（i） jquery@版本
  参数  
  不写
  --save  下载的包是项目必须的包，也就是项目运行的时候就必须使用的
  -S

  --save-dev  下载的包一般是项目的工具包，工具用完了就没用了
  -D


- 全局下载，下载到电脑上(一般下载的是工具)
  npm i serve -g 
  serve 是一个快速搭建服务器的包

- 卸载
  npm unistall（uni） jquery 
  加上-g 是卸载全局的


### 模块
其实一个 js 文件就被称为是一个模块
node 模块分类
- 核心模块  （做后端会用到）
- 第三方模块 (就是 npm 下载的)
- 自定义模块 (自己创建的 js 文件)


模块拥有独立作用域，不能相互访问，要使用模块内的内容，只能导出
模块的导入导出

模块的导入
require(), 导入的时候先执行了模块的内容
- 核心模块和第三方模块 导入的时候直接 require 包名即可
- 自定义模块 导入的时候需要使用 路径

模块的导出
```js
module.exports = {x: 100}  // 导出一个对象

module.exports = x  // 导出一个 x 变量
```


#### .json 文件
类似前端对象, 但是引号需要使用双引。最后一项不需要逗号




#### npm 技巧
- 下载等待时展示 http 请求 npm config set loglevel=http
- 替换淘宝镜像 npm config set registry https://registry.npm.taobao.org