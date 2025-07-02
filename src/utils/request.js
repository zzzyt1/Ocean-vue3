// 引入axios
import axios from 'axios'
import store from "@/store";
import router from "@/router";
// 创建axios实例
const service = axios.create({
    timeout: 5000,
    baseURL: 'http://127.0.0.1:3000/'
})

// 请求拦截器
service.interceptors.request.use(config => {
    // 自动添加token
    const token = localStorage.getItem('mytoken') || ''
    if (token) {
        config.headers["token"] = token
    }
    return config;
}, error => {
    // 对请求错误做什么
    return Promise.reject(error)
}
)

// 响应拦截器
service.interceptors.response.use(response => {
    return response.data
}, error => {

    toast(error, "error")



    return Promise.reject(error)
}
)

export default service;