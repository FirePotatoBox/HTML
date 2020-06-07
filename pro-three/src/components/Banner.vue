// 轮播图组件
//必须传入一个图片数组banners
//{url: require(""),link:"",}
<template>
  <div class="banner-container" @mouseenter="autoStop()" @mouseleave="autoStart()">
    <ul class="main" 
        :style="{
            width:banners.length * 100 +'%',
            marginLeft: -index*100+'%'
        }">
        <li v-for="(item,i) in banners" :key="i">
            <a :href="item.link"><img :src="item.url" alt=""></a>
        </li>
    </ul>
    <ul class="dots">
        <li v-for="(item,i) in banners" 
            :key="i" 
            :class="{
                actived: i === index,
            }"
            @click="index=i"
        ></li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        banners:{
            type: Array,
            required: true,
        }
    },
    data(){
        return{
            index: 0,
            timer: null,
        }
    },
    //组件创建后执行
    created(){
        this.autoStart();
    },
    //组件销毁后执行
    destroyed(){
        this.autoStop();
    },
    methods:{
        //自动开始切换
        autoStart(){
            if(this.timer){
                return;
            }
            this.timer = setInterval(()=>{
                this.index = (this.index + 1) % this.banners.length;
            },2000);
        },
        //停止切换
        autoStop(){
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul,ol{
    list-style: none;
}
.banner-container{
    width: 400px;
    height: 250px;
    overflow: hidden;
    margin: 50px auto;
    position: relative;
}
.main{
    width: 400%;
    height: 250px;
    overflow: hidden;
    transition: all 0.5s;
}
.main li{
    display: inline-block;
    width: 400px;
}
.dots{
    position: absolute;
    bottom: 10px;
    right: 20px;
}
.dots li{
    width: 13px;
    height: 13px;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 2px;
}
.actived{
    background:#fff;
}
</style>