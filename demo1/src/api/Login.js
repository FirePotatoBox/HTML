import axios from './index.js'

//登录
export function login(username, password, code, uuid) {
    const data = {
        username,
        password,
        code,
        uuid
    }
    return axios({
        url: 'dev-api/login',
        method: 'post',
        data: data
    })
}


//获取验证码
export function getCodeImg() {
    return axios({
        url: 'dev-api/captchaImage',
        method: 'get'
    })
}