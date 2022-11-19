<template>
  <div class="todo">
    <div class="todo-text" v-if="!isEditing">
      <input :checked="done" @change="change" type="checkbox" name="" id="" />
      <span @dblclick="edit" class="text">{{ text }}</span>
      <span @click="del">×</span>
    </div>
    <input ref="myInp" :value="text" class="todo-input" @blur="handleBlur" v-else type="text" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["id", "text", "done"],
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    ...mapActions(["delTodo", "changeTodoStatus"]),
    del() {
      this.delTodo(this.id);
    },
    change(event) {
      // console.log(event.target.checked)
      this.changeTodoStatus({id: this.id, newStatus: event.target.checked});
    },
    edit(){
      this.isEditing = true 
      this.$nextTick(() => {
        this.$refs.myInp.focus()
      })
    },
    handleBlur(event){
      this.isEditing = false
      console.log(event.target.value)
    }
  },
};
</script>

<style>
.todo {
  border-bottom: 1px solid #000;
}
.todo .todo-text {
  display: flex;
  padding: 10px 0;
}
.todo-text input,
.todo-text span {
  flex-shrink: 0;
}
.todo-text .text {
  flex-grow: 1;
}
</style>