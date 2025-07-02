<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { LoginAPI } from "@/api/user";
import { ElMessage } from "element-plus";
import { useStore } from 'vuex';

const router = useRouter(); //有带r的router是操作路由
const store = useStore();

// 验证规则
const formRules = ref({
  user: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

//账号密码
const loginData = ref({
  user: "",
  password: "",
});
//登录的dom
const loginRef = ref()
// 登录，验证
const login = async (formEl) => {
  // 通过验证后才可以登录
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // 登录
      const res = await LoginAPI(loginData.value);
      if (res.status !== 200) return ElMessage({
        message: res.message,
        type: "error",
      });
      //记住我功能
      if (rememberMe.value) {
        localStorage.setItem('rememberMe', JSON.stringify(loginData.value));
      } else {
        localStorage.removeItem('rememberMe'); // 清除用户名
      }
      // 登录成功
      ElMessage({
        message: '登录成功！',
        type: "success",
      });
      formEl.resetFields() //清空表单
      store.commit('setToken', res.data.token)//把token存入vuex中
      //获取用户信息
      await store.dispatch("logInit", res.data.id);

      router.push('/home'); // 跳转到重定向路径或主页
    }
  })
};

//记住我
const rememberMe = ref();
// 在组件挂载时检查 localStorage
onMounted(() => {
  const savedUsername = JSON.parse(localStorage.getItem('rememberMe'));
  if (savedUsername) {
    loginData.value.user = savedUsername.user;
    loginData.value.password = savedUsername.password;
    rememberMe.value = true; // 如果有用户名，设置记住我为选中
  }
});

</script>

<template>
  <!-- 登录-->
  <div class="login">
    <el-form class="login-box" ref="loginRef" :rules="formRules" :model="loginData" label-width="auto">
      <h3 class="title">登 录</h3>
      <el-form-item label="账号：" prop="user">
        <el-input v-model="loginData.user"> </el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="loginData.password"> </el-input>
      </el-form-item>
      <el-form-item prop="rememberMe">
        <el-checkbox v-model="rememberMe">记住我</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%; font-size: 18px" @click="login(loginRef)">登 录</el-button>
      </el-form-item>
      <el-button text @click="router.push('/register')" style="color: #3f9eff">去注册 >></el-button>
    </el-form>
  </div>

</template>

<style scoped>
.login {
  display: flex;
  width: 100%;
  height: calc(100vh - 50px);
  background: url("../../assets/sharp.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
}

.login-box {
  box-sizing: border-box;
  width: 400px;
  border-radius: 6px;
  background-color: rgba(248, 248, 255, 0.9);
  padding: 20px 20px 20px 20px;
}

.title {
  text-align: center;
  margin: 0px auto 20px;
}


</style>