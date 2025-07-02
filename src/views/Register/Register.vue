<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { regiserAPI } from "@/api/user";
import { ElMessage } from "element-plus";

const router = useRouter(); //有带r的router是操作路由

//注册
const registerData = ref({
  user: "",
  password: "",
});
//注册的dom
const registerRef = ref()
// 注册
const register = async (formEl) => {
  // 通过验证后才可以登录
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await regiserAPI(registerData.value);
      if (res.status !== 200) return ElMessage({
        message: res.message,
        type: "error",
      });
      ElMessage({
        message: "注册成功！",
        type: "success",
      });
      cancelForm(registerRef.value)
    }
  })
};

//取消注册
const cancelForm = (formEl) => {
  // 把验证提示和数据清空
  formEl.resetFields()
};
// 验证规则
const formRules = ref({
  user: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
</script>

<template>
  <div class="login">
    <el-form class="login-box" ref="registerRef" :rules="formRules" :model="registerData" label-width="auto">
      <h3 class="title">注 册</h3>
      <el-form-item label="账号：" prop="user">
        <el-input v-model="registerData.user"> </el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="registerData.password"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%; font-size: 18px" @click="register(registerRef)">注 册</el-button>
      </el-form-item>
      <el-button text @click="router.push('/login')" style="color: #3f9eff">去登录 >></el-button>
    </el-form>
  </div>

</template>

<style scoped>
.login {
  display: flex;
  width: 100%;
  height: calc(100vh - 50px);
  background: url("../../assets/pollution.jpeg");
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

.el-login-footer {
  height: 40px;
  line-height: 40px;
  bottom: 0px;
  color: aliceblue;
  font-size: 12px;
  letter-spacing: 1px;
  position: fixed;
}
</style>