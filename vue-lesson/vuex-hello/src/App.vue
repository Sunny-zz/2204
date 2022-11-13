<template>
  <div id="app">
    <button>-</button>
     <span>{{count}}</span>
    <button @click="add">+</button>
    <hr>
    <span>{{total}}</span>
    <hr>
    <div v-if="userInfo">
      <span>{{userInfo.username}}</span>
      <span>{{userInfo.userage}}</span>
    </div>
    <hr>
    <HelloDemo />
  </div>
</template>

<script>
import HelloDemo from './components/HelloDemo.vue'


export default {
  components: { HelloDemo },
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count 
    },
    total(){
      return this.$store.getters.total
    },
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  created () {
    this.$store.dispatch('getUserInfo')
  },
  methods: {
    add() {
      this.$store.commit('add')
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
