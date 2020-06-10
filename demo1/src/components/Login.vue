//登录组件
<template>
  <div class="Login">
    <el-form ref="loginform" :model="loginform" status-icon :rules="loginRules" class="login-form">
      <h3>后台管理系统</h3>
      <el-form-item prop="username" class="items">
        <el-input
          type="text"
          v-model="loginform.username"
          auto-complete="off"
          prefix-icon="el-icon-user"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" class="items">
        <el-input
          type="password"
          v-model="loginform.password"
          auto-complete="off"
          prefix-icon="el-icon-lock"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code" class="items-code">
        <el-input
          v-model="loginform.code"
          prefix-icon="el-icon-finished"
          placeholder="验证码"
          style="width:63.3%"
        ></el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" />
        </div>
      </el-form-item>
      <el-checkbox class="check" v-model="loginform.rememberMe" style="float:left;margin:7% 0 0 10%;">记住密码</el-checkbox>
      <el-form-item style="width:100%;" class="items">
        <el-button type="primary" style="float:right;margin-right:10%" @click="handleLogin()">提交</el-button>
      </el-form-item>
    </el-form>
    <button @click="ABC()">aaaa</button>
  </div>
</template>

<script>
import {getCodeImg} from '../api/Login'
export default {
  name: "Login",
  data() {
    return {
      codeUrl: "",
      loginform: {
        username: "admin",
        password: "admin123",
        code: "",
        uuid: "",
        rememberMe: false
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空！" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空！" }
        ],
        code: [{ required: true, trigger: "blur", message: "验证码不能为空！" }]
      },
      redirect: undefined
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    ABC() {
      console.log(this.$route.name);
      this.$router.push({ path: "/Index" })
    },
    getCode() {
      getCodeImg().then(res => {
        this.codeUrl = "data:image/gif;base64," + res.data.img;
        this.loginform.uuid = res.data.uuid;
      });
    },
    handleLogin() {
      //表单验证
      this.$refs.loginform.validate(valid => {
        if (valid) {
          //调用store中的Login方法
          this.$store.dispatch("Login", this.loginform).then(() => {
            this.$router.push({ path: "/Index" });
          });
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss">
* {
  margin: 0;
  padding: 0;
}
.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: deepskyblue;
}
h3 {
  margin: 10px auto;
  text-align: center;
}
.login-form {
  width: 400px;
  height: 300px;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 20px auto;
  background: #fff;
}

.items {
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
.items-code {
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
.login-code {
  width: 36%;
  height: 38px;
  float: right;
}
.login-code img {
  cursor: pointer;
  vertical-align: middle;
}
</style>