<template>
  <div class="login">
    <h2>系统登录</h2>
    <el-form :model="userInfo" status-icon :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input
          style="width: 300px"
          prefix-icon="el-icon-user"
          type="text"
          v-model.trim="userInfo.username"
          autocomplete="off"
          placeholder="请输入 accesstoken"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          style="width: 300px"
          prefix-icon="el-icon-lock"
          type="password"
          v-model.trim="userInfo.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: "7fe004e4-7c63-4de6-8019-7382f2379d93",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          const { username: token } = this.userInfo;
          // setTimeout(() => {
          //   if (username === "123456" && password === "admin") {
          //     // console.log("登陆成功");
          //     // 登录成功之后 要记录登录的信息，这个信息要所有页面都能获取到，最好不是发请求获取
          //     // 就需要我们前端记录这个登录信息
          //     // 我们使用浏览器的本地存储功能   localstorage   sessionstorage
          //     // 两者用法完全一样  区别是 localstorage 一直会存储在浏览器中 除非删除了  sessionstorage 浏览器关闭了就消失了
          //     // 存 只能存布尔值 字符串 数字， 想要存对象， 需要使用 JSON.stringfy 转成 JSON 串再存。
          //     sessionStorage.setItem('isLogin' , true)
          //     // 取  取的时候取的是字符串
          //     // const s = sessionStorage.getItem('isLogin')
          //     // 删
          //     // localStorage.removeItem('isLogin')    删一个
          //     // localStorage.clear()  删所有

          //     // 编程式导航 不需要 router-link 跳转
          //     this.$router.push('/')
          //   } else {
          //     // console.log("登录失败");
          //     this.$message({
          //       type: 'error',
          //       message: '用户名密码不匹配',
          //       duration: 500
          //     })
          //   }
          // }, 300);
          let  res = null;
          try {
            res = await this.$http.post("/accesstoken", {
              accesstoken: token,
            });
            const { loginname, avatar_url} = res
            sessionStorage.setItem('userInfo', JSON.stringify({loginname, avatar_url}))
            sessionStorage.setItem('token', token)
            this.$router.push('/') 
          } catch (error) {
            this.$message({
              type: "error",
              message: "token输入有误",
              duration: 500,
            });
          }
          
        }
      });
    },
  },
};
</script>

<style>
.login {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
</style>