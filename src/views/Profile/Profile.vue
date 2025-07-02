<script setup>
import { ref, computed } from 'vue';
import { editUserInfoAPI } from '../../api/user';
import SideNav from '../../components/SideNav.vue';
import { useStore } from 'vuex';
import { ElMessage } from "element-plus";
const store = useStore();
const userinfo = computed(() => store.getters.getUserInfo);


const form = ref({
  id: userinfo.value.id,
  user: userinfo.value.user,
  name: userinfo.value.name,
  avatar: userinfo.value.avatar
})


//上传图片之前的验证
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('上传的图片只能是 JPG/png 格式!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('上传的图片大小不能超过 2MB!')
    return false
  }
  return true
}
//上传图片成功后的回调
const handleAvatarSuccess = (res, file) => {
  form.value.avatar = res.url
}

const onSubmit = async () => {
  const res = await editUserInfoAPI(form.value)
  if (res.status === 200) {
    ElMessage.success('修改成功')
    //获取用户信息
    await store.dispatch("logInit", form.value.id);
  }
}
</script>

<template>
  <SideNav>
    <div class="profile">
      <h1>我的账户信息</h1>
      <el-form :model="form" label-width="auto" :inline="true" style="padding-left: 20px;">
        <el-form-item label="账号">
          <el-input v-model="form.user" :disabled="true" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <div class="upload">
          <h2>点击上传头像</h2>
          <el-upload class="avatar-uploader" action="http://127.0.0.1:3000/api/user/upload" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img :src="form.avatar" class="avatar" />
          </el-upload>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width: 100px; height: 40px;">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </SideNav>

</template>

<style lang="scss">
.profile {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 30px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .upload {
    margin: 20px 0;

    h2 {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }



  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  .avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }

  .avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>