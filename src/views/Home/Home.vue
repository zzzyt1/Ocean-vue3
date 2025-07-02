<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
</script>

<template>
  <div class="video-container">
    <video src="../../assets/video.mp4" autoplay loop muted playsinline></video>
  </div>
  <div class="buy">
    <div class="content">
      <h3>享受一切</h3>
      <h4>提前购票</h4>
      <div class="an" @click="router.push('/buytickets')">
        立即购票
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.video-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 使视频完全填充父容器 */
}

.buy {
  width: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .content {
    opacity: 1;

    /* 内部内容的透明度保持不变 */
    h3 {
      font-size: 30px;
      color: #000;
      text-align: center;
      margin-top: 20px;
    }

    h4 {
      font-size: 20px;
      color: #000;
      text-align: center;
      margin-top: 20px;
    }

    .an {
      width: 120px;
      height: 50px;
      background-color: #000;
      color: #fff;
      text-align: center;
      line-height: 50px;
      margin: 50px auto;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>