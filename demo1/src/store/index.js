import Vue from 'vue'; //引入vue
import Vuex from 'vuex'; //引入vuex

import user from './module/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     //state类似data  这里面写数据
    // },
    // getters: {
    //     //getters 类似computed  这里写(计算)方法
    // },
    // mutations: {
    //     //mutations 类似methods 这里写方法对数据做出更改(同步操作)
    // },
    // actions: {
    //     //actions 类似methods 这里写方法对数据做出更改(异步操作)
    //     //使用起来几乎与mutations一样
    //     // 除了一个是同步操作，一个是异步操作，一个使用commit调用，一个使用dispatch调用
    // }
    modules: {
        user,
    }
})