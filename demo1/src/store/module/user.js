import Axios from "axios"
import { getToken, setToken } from '../../utils/auth.js'

const user = {
    state: {
        //state类似data  这里面写数据
        token: getToken(),
    },
    getters: {
        //getters 类似computed  这里写(计算)方法
    },
    mutations: {
        //mutations 类似methods 这里写方法对数据做出更改(同步操作)
        SET_TOKEN: (state, token) => {
            state.token = token
        },
    },
    actions: {
        //actions 类似methods 这里写方法对数据做出更改(异步操作)
        //使用起来几乎与mutations一样
        // 除了一个是同步操作，一个是异步操作，一个使用commit调用，一个使用dispatch调用
        Login({ commit }, userinfo) {
            Axios.post('/api/dev-api/login', userinfo)
                .then(res => {
                    console.log('post请求发送成功')
                    console.log(res)
                    commit('SET_TOKEN', res.data.token) //将token保存在state中
                    setToken(res.data.token); //将token保存在cookie中
                })
                .catch(err => {
                    console.log('post请求发送失败')
                    console.log(err)
                })

        }

    }

}

export default user