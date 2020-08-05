<template>
<div class="login-box">
 <el-form label-position="top" label-width="0px" class="login-form">
     <h2 class="title">系统登录</h2>
  <el-form-item label="账号">
    <el-input v-model="loginForm.account"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="loginForm.password" type="password"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button class="login-button" type="primary" @click="login()">登录</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import qs from 'querystring';
export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$axios({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'post',
        url: 'login',
        data: qs.stringify({
          account: this.loginForm.account,
          password: this.loginForm.password,
        }),
      }).then((res)=> {
        if (res.data.message=='用户名或密码错误') {
          alert('用户名或密码错误');
        } else {
          alert('登录成功');
          this.$router.push('/');
        }
      });
    },
  },
};
</script>

<style scoped>
.title{
    text-align: center;
    margin-bottom: 10px;

}
.login-box{
    height: 100%;
    background-color: rgb(0, 32, 75);
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form{
    width: 300px;
    background-color: aliceblue;
    border: 5px;
    border-radius: 5px;
    padding-top: 5px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    box-shadow: 1px 1px 1px 1px #464646;
}
.login-button{
    width: 300px;
}
</style>
