import request from '@/utils/request'

//登录
export function LoginAPI(data) {
    return request({
        url: "/api/user/login",
        method: "post",
        data,
    });
}
//注册
export function regiserAPI(data) {
    return request({
        url: "/api/user/register",
        method: "post",
        data,
    });
}
//获取用户信息
export function getUserAPI(id) {
    return request({
        url: `/api/user/info/${id}`,
        method: "get",
    });
}
//更改密码
export function editUserPasswordAPI(data) {
    return request({
        url: `/api/user/updatepwd`,
        method: "post",
        data,
    });
}
//更改用户信息
export function editUserInfoAPI(data) {
    return request({
        url: `/api/user/updateinfo`,
        method: "post",
        data,
    });
}