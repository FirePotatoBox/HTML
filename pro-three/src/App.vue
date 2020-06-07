<template>
  <div id="app">
    <Banner :banners="banners"></Banner>
    <login></login>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Banner from "./components/Banner"
// import Banner1 from "./assets/image/1"
// import Banner2 from "./assets/image/2"
// import Banner3 from "./assets/image/3"
// import Banner4 from "./assets/image/4"
import Login from "./components/Login"
export default {
  components:{
    Banner,
    Login,
  },
  data(){
    return{
      banners:[
        {
          url: require("./assets/image/1.jpg"),
          link:"https://www.baidu.com",
        },
        {
          url: require("./assets/image/2.jpg"),
          link:"https://www.baidu.com",
        },
        {
          url: require("./assets/image/3.jpg"),
          link:"https://www.baidu.com",
        },
        {
          url: require("./assets/image/4.jpg"),
          link:"https://www.baidu.com",
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
