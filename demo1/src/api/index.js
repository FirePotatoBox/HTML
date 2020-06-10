//配置axios
import axios from 'axios'
import { getToken } from '../utils/auth.js'

//修改axios默认的请求头的Contype-type(数据类型)为json的格式
axios.defaults.headers['Content-type'] = 'application/json;charset=utf-8'

//创建axios实例
const service = axios.create({
    //baseURL表示请求url的公共部分
    // baseURL: 'http://192.168.1.196',
    baseURL: '/api',
    //超时
    timeout: 10000
})

//每次发出请求时，拦截并在请求头中加上Token，以便后台验证权限
//通过axios请求拦截器添加token，保证拥有获取数据的权限
//request拦截器
service.interceptors.request.use(config => {
    //判断是否需要设置Token
    const isToken = (config.headers || {}).isToken === false
    if (getToken() && !isToken) {
        // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers.Authorization = 'Bearer ' + getToken()
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

//response响应拦截器
axios.interceptors.response.use(res => {
    console.log('响应拦截器')
    console.log(res)
})


export default service