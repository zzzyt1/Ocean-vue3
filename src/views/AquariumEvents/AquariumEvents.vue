<script setup>


</script>

<template>
  <div class="news">
    <div class="item">
      <div class="left">
        <img src="../../assets/ocean/4 (4).jpg" alt="">
      </div>
      <div class="right">
        <div class="title">招募令丨【研学营】四大精品开营在即，报名从速！</div>
        <div class="info">
          活动时间：2024-05
        </div>
        
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../assets/ocean/4 (3).jpg" alt="">
      </div>
      <div class="right">
        <div class="title">文那大师原创国潮，“厉害塔”欢迎来打卡！HOLY HIGH！</div>
        <div class="info">
          活动时间：2024-04
        </div>
        
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../assets/ocean/4 (1).jpg" alt="">
      </div>
      <div class="right">
        <div class="title">国庆免费看演出！歌舞团和演艺联手打造惠民活动，欢度佳节！</div>
        <div class="info">
          活动时间：2023-10
        </div>
        
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../assets/ocean/4 (2).jpg" alt="">
      </div>
      <div class="right">
        <div class="title">剩者为王！“鲨鱼游戏”万圣首发！惊魂攻略一键get！</div>
        <div class="info">
          活动时间：2023-11
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
.news {
  padding: 30px 20%;

  .item {
    display: flex;
    width: 1200px;
    height: 220px;
    padding-bottom: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #eee;

    .left {
      width: 300px;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .right {
      flex: 1;
      padding-left: 20px;

      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .info {
        margin: 30px 0;
        font-size: 20px;
      }

    }
  }
}
</style>