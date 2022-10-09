<template>
  <div class="todo-wrap">
    <div class="todo-form">
      <input v-model="isAllDone" type="checkbox" />
      <input v-model="text" type="text" />
      <button @click="add">添加</button>
    </div>
    <div class="todo-list">
      <div class="todo-item" v-for="(todo) in showTodos" :key="todo.id">
        <div v-show="todo.id !== editTodoId">
          <input type="checkbox" v-model="todo.done" />
          <span @dblclick="edit(todo.id)" :class="['text', { done: todo.done }]">{{ todo.text }}</span>
          <button @click="del(todo.id)">×</button>
        </div>
        <!-- ref = myInp1 -->
        <!-- ref = myInp2 -->
        <!-- ref = myInp3das -->
        <input :ref="'myInp'+todo.id" :class="{hide: todo.id !== editTodoId}" v-model="todo.text" @blur="editTodoId = '' "  type="text">
      </div>
    </div>
    <div class="todo-foot">
      <span>{{ activeNums }} item{{ activeNums === 1 ? "" : "s" }} left</span>
      <div class="btns">
        <button
          :style="{ color: type === 'all' ? 'red' : '#000' }"
          @click="changeType('all')"
        >
          all
        </button>
        <button
          :style="{ color: type === 'active' ? 'red' : '#000' }"
          @click="changeType('active')"
        >
          active
        </button>
        <button
          :style="{ color: type === 'completed' ? 'red' : '#000' }"
          @click="changeType('completed')"
        >
          completed
        </button>
      </div>
      <button @click="delAllDone">clear completed</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "吃饭",
          done: false,
        },
      ],
      type: "all",
      text: "",
      editTodoId: ''
    };
  },
  computed: {
    activeNums() {
      return this.todos.reduce((res, ele) => (!ele.done ? res + 1 : res), 0);
    },
    // isAllDone(){
    //   return this.todos.every(ele => ele.done)
    // }
    isAllDone: {
      get() {
        return this.todos.every((ele) => ele.done);
      },
      set(newValue) {
        this.todos.forEach((ele) => {
          ele.done = newValue;
        });
      },
    },
    showTodos() {
      // 根据 type 筛选数组 用来展示
      const type = this.type;
      return this.todos.filter((todo) =>
        type === "all" ? true : type === "active" ? !todo.done : todo.done
      );
    },
  },
  methods: {
    add() {
      if (this.text !== "") {
        this.todos.push({
          id: new Date().getTime(),
          text: this.text,
          done: false,
        });
        this.text = "";
      }
    },
    del(id) {
      // console.log(id)
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    delAllDone() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
    changeType(newType) {
      // 当我们定义了一个 data 但是这个 data 跟页面没关联的时候， 修改 data 是没有用的
      this.type = newType;
    },
    edit(id){
      this.editTodoId = id
      // 编辑输入框要双击出现之后自动获得焦点， 利用 input 的 autofocus 不可行
      // 需要在双击之后操作才行
      //  vue 中并没有让输入框获得焦点的功能， 只能选择使用原生的
      // 使用原生的获得焦点就需要获取到原生的 dom 元素， 一般vue中不使用 document。 
      // vue 中提供了 ref 来让用户获取 dom 节点
      // 由于 我们的输入框是循环生成的那么 ref='inp' 其实在所有的输入框上都写了， 所以 this.$refs.myInp 会获取到所有的输入框
      // 需要给所有的输入框的 ref 作区分

      // ref 的使用
      // 1. 在 template 中的标签上 加上 ref 属性 并赋值   ref='xx'
      // 2. 在 script 中 使用 this.$refs.xx 就可以获取到对应的 dom 节点了
      // 但是要注意 如果是 循环中设置的 ref 那么 this.$refs.xx 获取的数组 需要加下标获取到真正的 dom 节点  this.$refs.xx[0] 
      // console.log(this.$refs['myInp' + id][0])

      // 函数内部的函数只能写成箭头函数才能使用 this
      // 直接设置或的焦点不生效，因为出现和获得焦点同时发生的，那么获得焦点不会生效，需要让获得焦点稍后执行
      // 1.setTimeout
      // setTimeout( () => {
      //   this.$refs['myInp' + id][0].focus()
      // },10)
      // 2.vue提供了 this.$nextTick 当页面渲染完毕了在执行里面的函数
      this.$nextTick(() => {
        this.$refs['myInp' + id][0].focus()
      })
      

    }
  },
};
</script>

<style>
.todo-wrap {
  width: 600px;
  margin: 0 auto;
}
.todo-form {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
.todo-list {
  margin-bottom: 20px;
}
.todo-list .todo-item {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  
}
.todo-list .todo-item >div {
  display: flex;
  justify-content: space-between;
}
.todo-list .todo-item .text {
  flex-grow: 1;
  margin-left: 10px;
}
.todo-list .todo-item .text.done {
  color: #ccc;
  text-decoration: line-through;
}
.todo-foot {
  display: flex;
  justify-content: space-between;
}
.hide{
  display: none;
}
</style>