<script setup>
import { useRouter, useRoute } from "vue-router";
import { useStore } from 'vuex';
import { computed } from 'vue';
import defaultAvatar from '../assets/headlogo.png';
const route = useRoute();
const router = useRouter()
const store = useStore();
const token = computed(() => store.getters.getToken);
const userinfo = computed(() => store.getters.getUserInfo);
//退出登录
const logout = () => {
  if (token.value) {
    store.commit('logout');
    router.push('/home');
  }
}
const handleCommand = (command) => {
  router.push(`${command}`);
}

</script>

<template>
  <div class="navbar">
    <div class="top">
      <div class="title" @click="router.push('/home')">海洋馆平台</div>
      <div class="log" v-if="token === null">
        <div class="login" @click="router.push('/login')"> 登录 </div>
        <div style="margin: 0 8px;">/</div>
        <div class="register" @click="router.push('/register')"> 注册 </div>
      </div>
      <div class="log" v-else>
        <img :src="userinfo?.avatar || defaultAvatar" alt="" @click="router.push('/profile')">
        <div class="login" @click="router.push('/profile')">{{ userinfo?.name }}</div>
        <div style="margin: 0 8px;">/</div>
        <div class="register" @click="logout"> 退出登录 </div>
      </div>
    </div>
    <div class="bottom" v-if="route.path !== '/login' && route.path !== '/register'">
      <div class="logo" @click="router.push('/home')">
        <img src="../assets/headlogo.png" alt="">
      </div>
      <div class="nav">
        <RouterLink to="/home">首页</RouterLink>
        <RouterLink to="/animalclass">动物百科</RouterLink>
        <RouterLink to="/buytickets">在线购票（预约）</RouterLink>
        <el-dropdown @command="handleCommand" style="margin: 0 20px;">
          <span class="el-dropdown-link">
            海洋馆
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="/aquariuminfo">海洋馆简介</el-dropdown-item>
              <el-dropdown-item command="/aquariumprojects">海洋馆项目</el-dropdown-item>
              <el-dropdown-item command="/aquariumnews">海洋馆资讯</el-dropdown-item>
              <el-dropdown-item command="/aquariumevents">海洋馆活动</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown @command="handleCommand" style="margin: 0 20px;">
          <span class="el-dropdown-link">
            游客服务
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="/admissionguide">入园须知</el-dropdown-item>
              <el-dropdown-item command="/schedule">时间表</el-dropdown-item>
              <el-dropdown-item command="/ticketsinfo">票务资讯</el-dropdown-item>
              <el-dropdown-item command="/routes">路线推荐</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.navbar {
  width: 100%;
  background-color: #222328;
  padding: 0 20%;

  .top {
    display: flex;
    height: 50px;
    color: white;
    justify-content: space-between;
    align-items: center;

    .title {
      cursor: pointer;
    }

    .log {
      display: flex;
      color: #919194;
      align-items: center;

      img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        cursor: pointer;
      }

      .login,
      .register {
        cursor: pointer;
      }

      .login:hover,
      .register:hover {
        color: white;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;

    .logo {
      cursor: pointer;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .nav {
      span {
        cursor: pointer;
        color: white;
        display: flex;
        align-items: center;
        font-size: 16px;
      }

      span:hover {
        border: none;
      }

      a {
        color: white;
        margin: 0 20px;
      }

      .el-dropdown-link:focus,
      .el-dropdown-link:hover {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }
}
</style>