<template>
  <div class="todo-foot">
    <span>{{activeTodoNums}} item left</span>
    <div>
      <button :class="{active: type === 'all'}" @click="change('all')">all</button>
      <button :class="{active: type === 'active'}" @click="change('active')">active</button>
      <button :class="{active: type === 'completed'}" @click="change('completed')">completed</button>
    </div>
    <button @click="delCompletedTodo">clear completed</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, createNamespacedHelpers } from 'vuex'
const {mapMutations: typeMutations} = createNamespacedHelpers('type')
export default {
  computed: {
    // ...mapState(['type']),
    ...mapState({
      type: state => state.type.type
    }),
    // type(){
    //   return this.$store.state.type.type
    // },
    ...mapGetters(['activeTodoNums'])
  },
  methods: {
    ...mapMutations(['delCompletedTodo']),
    ...typeMutations(['changeType']),
    change(type) {
      // this.$store.commit('changeType', type)
      // this['type/changeType'](type)
      this.changeType(type)
    }
  },
}
</script>

<style>
  .todo-foot{
    display: flex;
    justify-content: space-between;
  }
  .active {
    color: red;
  }
</style>