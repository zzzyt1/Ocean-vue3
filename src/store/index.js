import { createStore } from 'vuex';
import { getUserAPI } from "@/api/user";
const store = createStore({
  state() {
    return {
      // 从本地存储中获取
      //token
      token: localStorage.getItem('mytoken') || null,
      //用户信息
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
    };
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getUserInfo(state) {
      return state.userInfo
    },
  },
  //必须通过 mutations 修改 state
  mutations: {
    //保存token
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('mytoken', token); // 将 token 保存到 localStorage
    },
    //保存用户信息
    setUserInfo(state, user) {
      state.userInfo = user;
      localStorage.setItem('userInfo', JSON.stringify(user));
    },
    //清除登录信息
    logout(state) {
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem('mytoken');
      localStorage.removeItem('userInfo');
    },

  },
  //异步操作放在 Actions 中
  actions: {
    //获取当前用户信息
    async logInit({ commit, state }, id) {
      let res = await getUserAPI(id)
      if (res.status == 200) {
        commit('setUserInfo', res.data);
      }
    },
  }
});

export default store;

//使用
// import { computed } from 'vue';
// import { useStore } from 'vuex';
//获取store实例
// const store = useStore();
// 使用mutations
// store.commit('setToken', res.data.token)
//直接获取state和getters
// const count = computed(() => store.state.count);
// const doubleCount = computed(() => store.getters.doubleCount);
//使用actions
// const handleLogin = () => {
//   store.dispatch("logInit", res.data.id);
// };