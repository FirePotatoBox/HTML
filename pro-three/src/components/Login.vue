//登录组件
<template>
  <div class="container" id="login">
      <form action="" id="login-form">
          <h3>后台管理系统</h3>
          <div class="form-group">
              <label>账号</label>
              <input type="text" class="form-item" v-model="username" required>
          </div>
          <div class="form-group">
              <label>密码</label>
              <input type="password" class="form-item" v-model="password" required>
          </div>
          <div class="btn">
              <input type="checkbox" class="remember" v-model="checked">
              <button class="submit" @click="submit()" >登录</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            checked: false,
        }
    },
    methods: {
        submit() {
            console.log('username: ' + this.username);
            
        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.container{
    width: 400px;
    height: 300px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 20px auto;
}
.container h3{
    margin: 20px auto;
    font-size: 30px;
}
.form-group{
    width: 400px;
    height: 60px;
    line-height: 60px;
    position: relative;
}
.form-group label{
    position: absolute;
    padding-left: 3px;
}
.form-item{
    width: 80%;
    height: 50%;
    box-sizing: border-box;
    padding-left: 35px;
}
.btn{
    width: 80%;
    height: 60px;
    margin: 10px auto;
}
.btn .remember{
    width: 15px;
    height: 15px;
    float: left;
    margin-left: 20px;
}
.btn .submit{
    float: right;
    margin-right: 20px;
    width: 40px;
    height: 30px;
    cursor: pointer;
}
</style>