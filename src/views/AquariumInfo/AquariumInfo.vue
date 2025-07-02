<script setup>


</script>

<template>
  <div class="info">
    <div class="top">
      <img src="../../assets/ocean/1 (3).png" alt="">
      <div class="top-item">
        <div class="item1">
          海洋馆概况
        </div>
        <div class="item2">
          海洋世界，位于市区核心旅游带星海广场西侧、星海公园内。共有海洋世界、极地世界、珊瑚世界、银河星海四大场馆及以
          海洋动物陪伴的鲸MALL奇趣商街，是一处集游览、科普、体验、休闲于一体的标志性旅游项目，国家AAA级旅游景点。
        </div>
      </div>

    </div>
    <div class="mid-item">
      <div class="left">
        <img src="../../assets/ocean/1 (4).png" alt="">
        <div class="msg">
          浪漫海洋世界
        </div>
      </div>
      <div class="right">
        <img src="../../assets/ocean/1 (2).png" alt="">
        <img  src="../../assets/ocean/1 (5).png" alt="">
        <div class="msg1">
          欢乐极地世界
        </div>
        <div class="msg2">
          静谧珊瑚世界
        </div>
      </div>
    </div>
    <div class="bottom-item">
      <img src="../../assets/ocean/1 (1).png" alt="">
      <img style="margin-left: 20px;" src="../../assets/ocean/1 (6).png" alt="">
      <div class="msg1">
        魔幻银河世界
      </div>
      <div class="msg2">
        奇趣商界
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.info {
  padding: 20px 20%;

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .top-item{
      margin-left: 20px;
      .item1 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .item2 {
        font-size: 20px;
        color: #666;
      }
    }
  }
  .mid-item{
    display: flex;  
    margin-bottom: 20px;
    .left {
      position: relative;
      margin-right: 20px;
      .msg{
        position: absolute;
        bottom: 40px;
        left: 20px;
        font-size: 30px;
        font-weight: bold;
        color: #fcff00;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      .msg1 {
        position: absolute;
        bottom: 360px;
        left: 20px;
        font-size: 30px;
        font-weight: bold;
        color: #fcff00;
      }
      .msg2 {
        position: absolute;
        bottom: 40px;
        left: 20px;
        font-size: 30px;
        font-weight: bold;
        color: #fcff00;
      }
    }
  }
  .bottom-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .msg1 {
      position: absolute;
      bottom: 40px;
      left: 20px;
      font-size: 30px;
      font-weight: bold;
      color: #fcff00;
    }
    .msg2 {
      position: absolute;
      bottom: 40px;
      left: 620px;
      font-size: 30px;
      font-weight: bold;
      color: #fcff00;
    }
  }
}
</style>