import { createRouter, createWebHistory } from "vue-router"
import { ElLoading } from 'element-plus';
import store from "@/store";
const routes = [
    {
        paht: "/",
        redirect: "/home"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login/Login.vue"),
        meta: { title: "登录" },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register/Register.vue"),
        meta: { title: "注册" },
    },
    {
        path: "/home",
        component: () => import("../views/Home/Home.vue"),
        meta: { title: "首页" },
    },
    {
        path: "/animalclass",
        component: () => import("../views/AnimalClass/AnimalClass.vue"),
        meta: { title: "动物分类" }
    },
    {
        path: "/animaldetail",
        component: () => import("../views/AnimalDetail/AnimalDetail.vue"),
        meta: { title: "动物详情" }
    },
    {
        path: "/aquariuminfo",
        component: () => import("../views/AquariumInfo/AquariumInfo.vue"),
        meta: { title: "海洋馆简介" }
    },
    {
        path: "/aquariumnews",
        component: () => import("../views/AquariumNews/AquariumNews.vue"),
        meta: { title: "海洋馆资讯" }
    },
    {
        path: "/aquariumprojects",
        component: () => import("../views/AquariumProjects/AquariumProjects.vue"),
        meta: { title: "海洋馆项目" }
    },
    {
        path: "/aquariumevents",
        component: () => import("../views/AquariumEvents/AquariumEvents.vue"),
        meta: { title: "海洋馆活动" }
    },
    {
        path: "/admissionguide",
        component: () => import("../views/AdmissionGuide/AdmissionGuide.vue"),
        meta: { title: "入园须知" }
    },
    {
        path: "/schedule",
        component: () => import("../views/Schedule/Schedule.vue"),
        meta: { title: "时间表" }
    },
    {
        path: "/ticketsinfo",
        component: () => import("../views/TicketsInfo/TicketsInfo.vue"),
        meta: { title: "门票信息" }
    },
    {
        path: "/routes",
        component: () => import("../views/Routes/Routes.vue"),
        meta: { title: "推荐路线" }
    },
    {
        path: "/profile",
        component: () => import("../views/Profile/Profile.vue"),
        meta: { title: "个人中心" }
    },
    {
        path: "/order",
        component: () => import("../views/Order/Order.vue"),
        meta: { title: "订单" }
    },
    {
        path:"/changepassword",
        component:()=>import("../views/ChangePassword/ChangePassword.vue"),
        meta:{title:"修改密码"}
    },
    {
        path: "/buytickets",
        component: () => import("../views/BuyTickets/BuyTickets.vue"),
        meta: { title: "购票" }
    },
    {
        path: "/Payment",
        component: () => import("../views/Payment/Payment.vue"),
        meta: { title: "支付" }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    // 每次路由跳转后滚动到顶部
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 };
    },
})
// 添加全局前置守卫
// router.beforeEach((to, from, next) => {
//     const loading = ElLoading.service({
//         lock: true,
//         text: 'Loading...',
//         background: 'rgba(0, 0, 0, 0.7)',
//     });
//     next(); // 确保要调用 next() 以继续导航
//     loading.close(); // 在这里可以添加逻辑，等待导航完成再关闭
// });
export default router