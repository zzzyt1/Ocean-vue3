<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const userinfo = computed(() => store.getters.getUserInfo);
const route = useRoute();
const router = useRouter();
const links = [
  { name: '编辑资料', path: '/profile' },
  { name: '订单列表', path: '/order' },
  { name: '修改密码', path: '/changepassword' },
];
</script>

<template>
  <div class="sidenav">
    <div class="left">
      <div class="img">
        <img :src="userinfo?.avatar" alt="">
        <h2>欢迎您，{{ userinfo?.name }}</h2>
      </div>
      <div v-for="(item, index) in links" :key="index" :class="['item', { active: route.path === item.path }]"
        @click="router.push(item.path)">
        {{ item.name }}
      </div>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>


</template>

<style lang="scss">
.sidenav {
  box-sizing: border-box;
  overflow: hidden;
  padding: 20px 20%;
  background-color: rgb(248, 248, 249);
  display: flex;
  height: calc(100vh - 150px);
  .right {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex: 1;
  }

  .left {
    width: 200px;
    height: 80%;
    background-color: white;
    margin-right: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .img {
      margin-bottom: 20px;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 20px;

      img {
        width: 150px;
        height: 150px;
      }

      h2 {
        margin-top: 10px;
        // 超出隐藏只显示一行
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        text-align: center;
      }
    }


    .item {
      width: 100%;
      cursor: pointer;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }

    .active {
      background-color: rgb(48, 114, 246);
      color: white;
    }
  }
}
</style>