<template>
  <div class="header-top">
    <div class="inner">
      <!-- link 跳转的时候可以直接跳转 name 在跳转地址很长的时候比较方便 -->
      <router-link :to="{name: 'home'}">
        <img width="100" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
      </router-link>
      <el-button  type='primary' @click="logout">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: null
    }
  },
  methods: {
    logout() {
      this.$router.push('/login')
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('userInfo')
    }
  },
}
</script>

<style>
.header-top {
  width: 100%;
  background-color: #444;
  margin-bottom: 20px;
}
.header-top .inner {
  height: 50px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>