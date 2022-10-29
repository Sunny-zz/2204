<template>
  <div>
    <!-- 传递插槽 -->
    <!-- v-bind 的修饰符 sync -->
    <!-- .sync 的作用是 提供一个修改 show 的方法当作自定义事件传递给 组件 -->
    <!-- 相当于传递了一个这样的自定义事件 update:show(value){ this.show = value } -->
    <DialogDemo :show.sync="show" >
      <!-- 子组件有两个地方需要传递插槽 -->
      <!-- 需要具名插槽 -->
      <template v-slot:header>
        <h3>插槽案例</h3>
      </template>
      <!-- v-slot:  简写成 # -->
      <template #content>
        <input type="text" />
      </template>

      <!-- 其实我们不使用 template 传递过去的插槽内容，相当于具名插槽 default -->
      <button>确定</button>
    </DialogDemo>
    <button @click="show = true">打开</button>
    <br>
    <br>
    <hr>
    <ScopeSlotDemo />
    <br>
    <br>
    <hr>
    <ListDemo :list='list'>
      <!-- 这个插槽其实只是一个 模版，当子组件循环的时候需要使用这个模板，展示对应的内容，该内容父组件获取不到，因为是在子组件循环的。父组件想要用的话，需要 子组件使用插槽的时候传递数据 -->

      <!-- 作用域插槽 -->
      <!-- v-slot='x'  x 表示的是子组件传递过来的数据组成的对象 {txt: 'xxx', a: '哈哈哈'} -->
      <template v-slot='{txt}'>
        <h3>{{txt}}</h3>
      </template>

      <!-- 当父组件的数组类型数据直接传递给了子组件 子组件循环展示，但是父组件想要提供一个内容模板（slot），那么循环的时候给 slot 传递prop -->
    </ListDemo>
    <br>
    <br>
    <hr>
    <!-- <div class="x"></div> -->
    <DynamicComponent />
    <br>
    <br>
    <hr>
    <TransitionDemo />
    <br>
    <br>
    <hr>
    <EdgeCase />
    <br>
    <br>
    <hr>
    <BigDemo />
    <br>
    <br>
    <hr>
    <TreeDemo />
    <br>
    <br>
    <hr>
    <CustomDirective />
    <br>
    <br>
    <hr>
    <MixinsDemo />
    <br>
    <br>
    <hr>
    <PluginsDemo />
    <br>
    <br>
    <hr>
    <RenderComponent />
    <br>
    <br>
    <hr>
    <FunctionComponent :list='list'  />
  </div>
</template>

<script>
import CustomDirective from './components/CustomDirective.vue';
import DialogDemo from "./components/DialogDemo.vue";
import DynamicComponent from './components/dynamicComponent/DynamicComponent.vue';
import EdgeCase from './components/EdgeCase.vue';
import FunctionComponent from './components/FunctionComponent.vue';
import ListDemo from './components/ListDemo.vue';
import MixinsDemo from './components/MixinsDemo.vue';
import PluginsDemo from './components/PluginsDemo.vue';
import BigDemo from './components/provideInjectDemo/BigDemo.vue';
import RenderComponent from './components/RenderComponent.vue';
import ScopeSlotDemo from './components/ScopeSlotDemo.vue';
import TransitionDemo from './components/TransitionDemo.vue';
import TreeDemo from './components/TreeDemo.vue';
export default {
  components: { DialogDemo, ScopeSlotDemo, ListDemo, DynamicComponent, TransitionDemo, EdgeCase, BigDemo, TreeDemo, CustomDirective, MixinsDemo, PluginsDemo, RenderComponent, FunctionComponent },
  data() {
    return {
      show: false,
      list: [
        {
          id:1,
          txt: 'vue'
        },
        {
          id:2,
          txt: 'react'
        },
        {
          id:3,
          txt: '小程序'
        }
      ]
    }
  },
  methods: {
    // close() {
    //   this.show = false
    // }
  },
};
</script>


<style >
</style>