import axios from './index.js'

//获取登录日志
export function list(query) {
    return axios({
        url: '/dev-api/monitor/logininfor/list',
        method: 'get',
        params: query
    })
}