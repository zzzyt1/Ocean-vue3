import request from '@/utils/request'

//添加预约
export function addReserveAPI(data) {
  return request({
    url: "/api/reserve/add",
    method: "post",
    data,
  });
}
//根据用户id获取预约信息
export function getReserveByUserAPI(id) {
  return request({
    url: `/api/reserve/userid/${id}`,
    method: "get",
  });
}
//更改预约状态
export function editReserveStatusAPI(data) {
  return request({
    url: `/api/reserve/status`,
    method: "post",
    data,
  });
}
//根据订单号获取预约信息
export function getReserveByOrderAPI(order) {
  return request({
    url: `/api/reserve/orderNo/${order}`,
    method: "get",
  });
}