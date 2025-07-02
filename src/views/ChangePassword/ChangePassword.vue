<script setup>
import { ref, computed } from 'vue';
import SideNav from '../../components/SideNav.vue';
import { useStore } from 'vuex';
import { editUserPasswordAPI } from '@/api/user';
import { ElMessage } from "element-plus";


const store = useStore();
const userinfo = computed(() => store.getters.getUserInfo);

const user = ref({
  id: userinfo.value.id,
  password: "",
  checkPass: ""
})
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (value.length < 6 || value.length > 18) {
    callback(new Error('密码长度应在 6 到 18 位字符之间'));
  } else {
    callback();
  }
};

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== user.value.password) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
};

const rules = {
  password: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
};

const ruleFormRef = ref(null);

const setInfo = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const res = await editUserPasswordAPI(user.value);
      if (res.status === 200) {
        ElMessage.success("修改成功");
      } else {
        ElMessage.error(res.message);
      }
      //清空
      user.value.password = "";
      user.value.checkPass = "";
    }
  });
};

</script>

<template>
<SideNav>
  <div class="admininfo">
    <div class="adminmsg">
      <h2>修改密码</h2>
      <el-form :model="user" :rules="rules" :label-position="'top'" ref="ruleFormRef">
        <el-form-item label="密码" class="inp" prop="password">
          <el-input v-model="user.password" size="large" style="width: 240px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" class="inp" prop="checkPass">
          <el-input v-model="user.checkPass" size="large" style="width: 240px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="setInfo()" style="width: 110px; height: 40px; margin-top: 10px;">
            保 存
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</SideNav>

</template>

<style>
.admininfo {
  width: 100%;
  min-height: 821px;

}

.adminmsg {
  width: 100%;
  height: 780px;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px 10%;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.adminmsg h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
}

.inp {
  width: 600px;
  padding-right: 10px;
  margin-bottom: 10px;
}
</style>